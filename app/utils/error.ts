
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