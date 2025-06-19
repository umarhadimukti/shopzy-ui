"use server";

import { get } from "@/app/common/utils/fetch";
import { Product } from "../interfaces/product.interface";

export default async function getProducts() {
    return await get<Product[]>("api/products");
}