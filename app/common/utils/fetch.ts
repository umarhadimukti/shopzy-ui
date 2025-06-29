import { cookies } from "next/headers";
import { API_URL } from "../constants/api";

export interface ApiResponse<T> {
    data?: T;
    message?: string | string[];
    error?: string;
}

export const post = async (path: string, data: FormData | object) => {
    const body = data instanceof FormData ? Object.fromEntries(data) : data;

    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    
    const res = await fetch(`${API_URL}/${path}`, {
        method: "POST",
        headers: {
            Cookie: cookieString,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: 'no-store',
    });

    const parsedRes = await res.json();

    if (!res.ok) {
        return { error: getErrorMessage(parsedRes) };
    }

    return { error: "", data: parsedRes };
};

export const get = async<T> (path: string, tags?: string[]): Promise<ApiResponse<T>> => {
    try {
        const cookieStore = await cookies();
        const cookieString = cookieStore.toString();
        console.log(`sending cookies: ${cookieString}`);

        const res = await fetch(`${API_URL}/${path}`, {
            headers: {
                Cookie: cookieString,
                "Content-Type": "application/json",
            },
            next: { tags }
        });
    
        const parsedRes = await res.json() as T;
    
        if (!res.ok) {
            return { error: getErrorMessage(parsedRes) };
        }
    
        return { data: parsedRes, error: "" }

    } catch (error) {
        console.error(`Fetch error ${error}`);
        return { error: 'Network error occurred' };
    }
}


/**
 * get error message from response
 * 
 * @param response - any
 * @returns - string
 */
export const getErrorMessage = (response: any): string => {
    if (response.message) {
        if (Array.isArray(response.message)) {
            return formatErrorMessage(response.message[0]);
        }
    }

    return "Unknown error occured";
}

/**
 * transform first character of error message to uppercase
 * 
 * @param message - string
 * @returns - string
 */
const formatErrorMessage = (message: string): string => {
    return `${message.charAt(0).toUpperCase()} ${message.slice(1)}`;
}