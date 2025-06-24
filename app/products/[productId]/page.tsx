import { Stack, Typography } from "@mui/material";
import { getProduct } from "./get-product";
import Image from "next/image";
import { API_URL } from "@/app/common/constants/api";

interface SingleProductProps {
    params: {
        productId: string;
    },
}

export default async function SingleProduct({ params }: SingleProductProps) {
    const product = await getProduct(+params.productId);

    return (
        <Stack gap={2} marginBottom="3rem">
            <Typography variant="h5" sx={{fontWeight: "bold"}}>{product.data?.name}</Typography>
            {
                product.data?.imageExists && (
                    <Image
                        src={`${API_URL}/images/products/${product.data?.id}.jpg`}
                        width={0}
                        height={0}
                        className="w-auto md:w-1/2 h-auto"
                        sizes="100vw"
                        alt={`img-${product.data?.id}-product`}
                    />
                )
            }
            <Stack gap={1}>
                <Typography variant="h5" sx={{fontWeight: 300}}>{product.data?.price}</Typography>
                <Typography variant="body1" sx={{fontWeight: 300, color: "text.secondary"}} className="truncate">{product.data?.description}</Typography>
            </Stack>
        </Stack>
    )
}