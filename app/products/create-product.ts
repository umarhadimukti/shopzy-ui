"use server";

import { post } from "../common/utils/fetch";

export default async function createProduct(formData: FormData) {
    const response = await post("api/products/new", formData);
    return response;
}