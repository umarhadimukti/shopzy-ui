import { NextRequest } from "next/server";
import { unauthenticatedRoutes } from "./app/common/constants/routes";
import authenticated from "./app/auth/authenticated";

export async function middleware(request: NextRequest) {
    const auth = await authenticated();

    // handle when user is not authenticated
    if (!auth && !unauthenticatedRoutes.some(route => request.nextUrl.pathname.startsWith(route.path))) {
        return Response.redirect(new URL("/auth/login", request.url));
    }

    // handle when user is authenticated
    const pathname = request.nextUrl.pathname;
    const isAuthRoute = pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register");
    if (auth && isAuthRoute) {
        return Response.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};