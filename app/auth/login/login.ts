"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/utils/fetch";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export default async function login(_prevState: FormError, formData: FormData) {
    const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
    });

    const parsedRes = await res.json();

    if (!res.ok) {
        return { error: getErrorMessage(parsedRes) };
    }

    setAuthCookie(res);

    redirect("/");
}

const setAuthCookie = async (res: Response) => {
    const setCookieHeader = res.headers.getSetCookie();
    if (setCookieHeader) {
        const token = setCookieHeader[0].split(";")[0].split("=")[1];
        const cookieStore = await cookies();
        cookieStore.set({
            name: "Authentication",
            value: token,
            secure: true,
            httpOnly: true,
            expires: new Date(jwtDecode(token).exp! * 1000),
        });
    }
}