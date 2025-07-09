"use client";

import { Grid } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { API_URL } from "../common/constants/api";
import revalidateProducts from "./actions/revalidate-products";
import getAuthentication from "../auth/actions/get-authentication";

interface ProductsGridProps {
    products?: IProduct[],
}

export default function ProductsGrid({ products }: ProductsGridProps) {
    useEffect(() => {
        let socket: Socket
        const createSocket = async () => {
            socket = io(API_URL!, {
                auth: {
                    Authentication: await getAuthentication(),
                }
            });
    
            socket.on("productUpdated", () => {
                revalidateProducts();
            });
        }
        createSocket();

        return () => {
            socket?.disconnect();
        }
    }, []);
    
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