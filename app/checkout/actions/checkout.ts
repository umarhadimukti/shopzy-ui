"use server";

import { post } from "@/app/common/utils/fetch";

export default async function checkout(productId: number) {
    return post("api/checkout/session", { productId });
}