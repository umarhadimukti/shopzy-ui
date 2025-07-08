import { NextRequest, NextResponse } from "next/server";
import { unauthenticatedRoutes } from "./app/common/constants/routes";
import authenticated from "./app/auth/actions/authenticated";

export async function middleware(request: NextRequest) {
    const auth = await authenticated();

    const pathname = request.nextUrl.pathname;

    console.log(request.headers.get("cookie"));

    // handle when user is not authenticated
    if (!auth && !unauthenticatedRoutes.some(route => pathname.startsWith(route.path))) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // handle when user is authenticated
    const isAuthRoute = pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register");

    if (auth && isAuthRoute) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};