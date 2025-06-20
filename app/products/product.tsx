import { Card, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";

interface ProductProps {
    product: IProduct;
}

export default function Product({ product }: ProductProps) {
    return (
        <Card className="p-4">
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Typography variant="body2">{product.price}</Typography>
        </Card>
    )
}