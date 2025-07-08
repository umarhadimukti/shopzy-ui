"use server";

import { cookies } from "next/headers";

export default async function getAuthentication() {
    const cookieStore = await cookies();
    return cookieStore.get("Authentication");
}