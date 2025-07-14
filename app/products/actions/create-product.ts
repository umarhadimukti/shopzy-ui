"use server";

import { revalidateTag } from "next/cache";
import { post } from "../../common/utils/fetch";
import { API_URL } from "@/app/common/constants/api";
import { cookies } from "next/headers";

export default async function createProduct(formData: FormData) {
    const response = await post("api/products/new", formData);

    const productImage = formData.get('image');

    if (productImage instanceof File && !response.error) {
        await uploadProductImage(response.data.id, productImage);
    }

    revalidateTag("products");

    return response;
}

async function uploadProductImage(productId: number, file: File) {
    const formData = new FormData();
    formData.append("image", file);

    const cookieStore = await cookies();
    const cookieString = cookieStore.toString();
    await fetch(`${API_URL}/api/products/${productId}/image`, {
        method: "POST",
        body: formData,
        headers: {
            Cookie: cookieString,
        },
    });
}