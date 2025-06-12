import { cookies } from "next/headers";
import { API_URL } from "../constants/api";

export const post = async (path: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
    });

    const parsedRes = await res.json();

    if (!res.ok) {
        return { error: getErrorMessage(parsedRes) };
    }

    return { error: "" };
};

export const get = async (path: string): Promise<Response> => {
    const res = await fetch(`${API_URL}/${path}`, {
        headers: { Cookie: (await cookies()).toString() },
    });

    return await res.json();
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

    return 'unknown error occured';
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