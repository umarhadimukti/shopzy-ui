"use server";

import { get } from "@/app/common/utils/fetch";

export default async function getProducts() {
    return await get("api/products");
}