"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/utils/fetch";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
    try {
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData)),
            credentials: 'include',
        });
    
        const parsedRes = await res.json();
    
        if (!res.ok) {
            return { error: getErrorMessage(parsedRes) };
        }
    } catch (error) {
        console.error("Login error:", error);
        return { error: "Login failed. Please try again." };
    }

    redirect("/");
}