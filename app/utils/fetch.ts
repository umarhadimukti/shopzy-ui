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

export const getErrorMessage = (response: any): string => {
    if (response.message) {
        if (Array.isArray(response.message)) {
            return formatErrorMessage(response.message[0]);
        }
    }

    return 'unknown error occured';
}

const formatErrorMessage = (message: string): string => {
    return `${message.charAt(0).toUpperCase()} ${message.slice(1)}`;
}