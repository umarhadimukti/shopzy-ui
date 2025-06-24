import { get } from "@/app/common/utils/fetch";
import { Product } from "../interfaces/product.interface";

export async function getProduct(productId: number) {
    return await get<Product>(`api/products/${productId}`);
}