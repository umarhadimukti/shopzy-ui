import getProducts from "./actions/get-products";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { Grid } from "@mui/material";
import ProductsGrid from "./products-grid";

export default async function Products() {
    const { data: products } = await getProducts();

    return (
        <ProductsGrid products={products} />
    )
}