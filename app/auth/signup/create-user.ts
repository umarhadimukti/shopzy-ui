"use server";

import { post } from "@/app/common/utils/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: FormResponse, formData: FormData) {
    const { error } = await post("api/users/new", formData);

    if (error) {
        return { error };
    }

    redirect("/");
}