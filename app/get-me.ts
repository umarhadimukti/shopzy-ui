"use server";

import { get } from "./utils/fetch";
import { cookies } from "next/headers";

export default async function getMe() {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("Authentication");

    console.log(`All cookies: ${cookieStore.toString()}`);
    console.log(`Auth cookies: ${authCookie}`);

    if (!authCookie) {
        console.error("No authentication cookie found");
        return null;
    }

    const result = await get('api/users/me');

    if (result.error) {
        console.error(`Error while fetching user: ${result.error}`);
        return null;
    }

    return result.data;
}