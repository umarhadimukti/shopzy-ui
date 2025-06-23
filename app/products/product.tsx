import { Card, Typography, Stack } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { API_URL } from "../common/constants/api";

interface ProductProps {
    product: IProduct;
}

export default function Product({ product }: ProductProps) {
    return (
        <Card className="p-4">
            <Stack gap={3}>
                <Image
                    src={`${API_URL}/products/`}
                    width={0}
                    height={0}
                    className="w-full h-auto"
                    sizes="100vw"
                    alt={`img-${product.id}`}
                />
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.price}</Typography>
                <Typography variant="body2">{product.description}</Typography>
            </Stack>
        </Card>
    )
}