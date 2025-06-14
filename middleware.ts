import { NextRequest } from "next/server";
import authenticated from "./app/auth/authenticated";

const unauthorizedRoutes: string[] = ["/auth/login", "/auth/signup"];

export function middleware(request: NextRequest) {
    if (!authenticated() && !unauthorizedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
        return Response.redirect(new URL("/auth/login", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};