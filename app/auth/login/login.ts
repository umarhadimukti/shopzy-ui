"use server";

import { post } from "@/app/utils/fetch";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
    const { error } = await post(`api/auth/login`, formData);

    if (error) {
        return { error }
    }

    redirect("/");
}