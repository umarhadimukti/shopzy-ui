"use server";

import { API_URL } from "@/app/common/constants/api";
import { getErrorMessage } from "@/app/common/utils/fetch";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
    try {
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
    
        const parsedRes = await res.json();
    
        if (!res.ok) {
            return { error: getErrorMessage(parsedRes) };
        }

        const cookieStore = await cookies();
        const setCookieHeaders = res.headers.getSetCookie();

        if (setCookieHeaders && setCookieHeaders.length > 0) {
            const authCookie = setCookieHeaders.find(cookie => {
                return cookie.startsWith("Authentication=");
            });

            console.log(`found auth cookie: ${authCookie}`);

            if (authCookie) {
                const cookieParts = authCookie.split(";");
                const tokenValue = cookieParts[0].split("=")[1];

                console.log(`token value: ${tokenValue}`);

                const decoded = jwtDecode(tokenValue);
                let expires = new Date(decoded.exp! * 1000);

                cookieStore.set("Authentication", tokenValue, {
                    expires,
                    sameSite: 'strict',
                    httpOnly: true,
                    secure: false,
                });
                
                console.log("cookie set successfully");
            } else {
                console.error("No Set-Cookie Headers found");
                return { error: "Authentication failed. no cookie received." };
            }

        }

    } catch (error) {
        console.error("Login error:", error);
        return { error: "Login failed. Please try again." };
    }

    redirect("/");
}