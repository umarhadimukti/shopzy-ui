import getProducts from "./actions/get-products";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { Grid } from "@mui/material";

export default async function Products() {
    const { data: products } = await getProducts();

    return (
        <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, lg: 12 }}>
            {products?.map((product: IProduct) => (
                <Grid key={product.id} size={{ xs: 4, sm: 4, lg: 3 }}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    )
}