"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage, post } from "@/app/utils/fetch";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
    const { error } = await post(`${API_URL}/api/auth/login`, formData);

    if (error) {
        return { error }
    }

    redirect("/");
}