

interface SingleProductProps {
    params: {
        productId: string;
    },
}

export default function SingleProduct({ params }: SingleProductProps) {
    return (
        <>
            <h1>Produk Id: {params.productId}</h1>
        </>
    )
}