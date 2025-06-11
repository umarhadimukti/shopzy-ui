"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/utils/fetch";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
    });

    const parsedRes = await res.json();

    if (!res.ok) {
        return { error: getErrorMessage(parsedRes) };
    }

    const token = res.headers.getSetCookie()[0].split(';')[0].split('=')[1];
    console.log(token)

    redirect("/");
}