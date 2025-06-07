"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
    const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const res = await fetch(`${API_URL}/api/users/new`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const parsedRes = await res.json();

    if (!res.ok) {
        return getStructuredErrors(parsedRes);
    }

    redirect("/");
}

function getStructuredErrors(response: any): {
    errorMap: Record<string, string>;
    error: string;
} {
    const errorMap: Record<string, string> = {};

    if (Array.isArray(response.message)) {
        for (const msg of response.message) {
            const [field, ...rest] = msg.split(" ");
            const message = rest.join(" ");
            if (["name", "email", "password"].includes(field)) {
                errorMap[field] = capitalize(message);
            }
        }
    }

    return {
        errorMap,
        error: Object.keys(errorMap).length === 0 ? "Something went wrong" : "",
    };
}

function capitalize(message: string): string {
    return `${message.charAt(0).toUpperCase()}${message.slice(1)}`;
}
