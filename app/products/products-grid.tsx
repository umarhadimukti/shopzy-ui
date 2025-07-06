import { Grid } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";

interface ProductsGridProps {
    products?: IProduct[],
}

export default function ProductsGrid({ products }: ProductsGridProps) {

    return (
        <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
            columns={{ xs: 4, sm: 8, lg: 12 }}
            sx={{ overflow: "scroll", height: "80vh", scrollbarWidth: "none" }}
        >
            {products?.map((product: IProduct) => (
                <Grid key={product.id} size={{ xs: 4, sm: 4, lg: 3 }}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    )
}