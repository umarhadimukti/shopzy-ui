import { Grid, Stack, Typography } from "@mui/material";
import { getProduct } from "./get-product";
import Image from "next/image";
import { API_URL } from "@/app/common/constants/api";
import Checkout from "@/app/checkout/Checkout";

interface SingleProductProps {
    params: {
        productId: string;
    },
}

export default async function SingleProduct({ params }: SingleProductProps) {
    const { productId } = await params;
    const product = await getProduct(+productId);

    return (
        <Grid container spacing={1}>
            {
                product.data?.imageExists && (
                    <Grid size={{xs: 12, md: 6}}>
                        <Image
                            src={`${API_URL}/images/products/${product.data?.id}.jpg`}
                            width={0}
                            height={0}
                            className="w-auto md:w-11/12 h-auto"
                            sizes="100vw"
                            alt={`img-${product.data?.id}-product`}
                        />
                    </Grid>
                )
            }
            <Grid size={{xs: 12, md: 6}}>
                <Stack gap={1}>
                    <Typography variant="h5" sx={{fontWeight: "bold"}}>{product.data?.name}</Typography>
                    <Typography variant="h5" sx={{fontWeight: 300}}>{product.data?.price}</Typography>
                    <Typography variant="body1" sx={{fontWeight: 300, color: "text.secondary"}} className="truncate">{product.data?.description}</Typography>

                    <Checkout productId={product.data?.id} />
                </Stack>
            </Grid>
        </Grid>
    )
}