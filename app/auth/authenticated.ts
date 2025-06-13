import { cookies } from "next/headers";

export default async function authenticated() {
    const cookieStore = await cookies();
    return !!cookieStore.get("Authentication");
}