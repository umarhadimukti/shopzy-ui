"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser( _prevState: any, formData: FormData ) {
    const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    const res = await fetch(`${API_URL}/api/users/new`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const parsedRes = await res.json();

    if (!res.ok) {
        return { error: getErrorMessage(parsedRes) };
    }

    redirect("/");
}

const getErrorMessage = (response: any): string => {
    if (response.message) {
        if (Array.isArray(response.message)) {
            return formatErrorMessage(response.message[0]);
        }
    }

    return 'unknown error occured';
}

const formatErrorMessage = (message: string): string => {
    return `${message.charAt(0).toUpperCase()}${message.slice(1)}`;
}