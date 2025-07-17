"use client";

import { Card, Typography, Stack, CardActionArea } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { API_URL } from "../common/constants/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface ProductProps {
    product: IProduct;
}

export default function Product({ product }: ProductProps) {
    const router = useRouter();
    const [ext, setExt] = useState<'jpg' | 'png' | null>(null);

    useEffect(() => {
        if (!product.imageExists) return;

        const checkImageExtension = async () => {
            const tryExt = async (ext: 'jpg' | 'png') => {
                const res = await fetch(`${API_URL}/images/products/${product.id}.${ext}`, {
                    method: "HEAD",
                });
                console.log(res)
                return res.ok ? ext : null;
            }

            const foundExt = (await tryExt('jpg')) || (await tryExt('png'));
            setExt(foundExt);
        }
        
        checkImageExtension();

    }, [product]);

    return (
        <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
            <Card
                className="p-4"
                sx={{"&:hover": {backgroundColor: "slategrey"}}}
            >
                <Stack gap={2}>
                    {product.imageExists && (
                        <Image
                            src={`${API_URL}/images/products/${product.id}.${ext || 'jpg'}`}
                            width={0}
                            height={0}
                            className="w-full h-auto"
                            sizes="100vw"
                            alt={`img-${product.id}`}
                        />
                    )}
                    
                    <Stack gap={1}>
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>{product.name}</Typography>
                        <Typography variant="body2">{product.price}</Typography>
                        <Typography variant="body2" className="truncate" sx={{ color: "text.secondary" }}>{product.description}</Typography>
                    </Stack>
                </Stack>
            </Card>
        </CardActionArea>
    )
}