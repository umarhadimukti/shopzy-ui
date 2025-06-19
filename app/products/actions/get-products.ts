"use server";

import { get } from "@/app/common/utils/fetch";
import { Product as IProduct } from "../interfaces/product.interface";

export default async function getProducts() {
    return await get<IProduct[]>("api/products");
}