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
        console.log(parsedRes);
        return { error: "" };
    }

    console.log(parsedRes);
    console.log('jalan');

    redirect("/");
}