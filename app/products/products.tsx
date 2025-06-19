import getProducts from "./actions/get-products";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { Grid } from "@mui/material";

export default async function Products() {
    const { data: products } = await getProducts();

    console.log(products);

    return (
        <Grid container>
            {products?.map((product: IProduct) => (
                <Grid key={product.id}>
                    <Product/>
                </Grid>
            ))}
        </Grid>
    )
}