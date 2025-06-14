import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "./auth-cookie";

export default async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(AUTHENTICATION_COOKIE);
}