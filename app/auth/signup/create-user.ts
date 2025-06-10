"use server";

import { post } from "@/app/utils/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
    const { error } = await post("api/users/new", formData);

    if (error) {
        return { error };
    }

    redirect("/");
}