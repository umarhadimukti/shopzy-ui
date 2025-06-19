import getProducts from "./actions/get-products"

export default async function Products() {
    const products = await getProducts();

    console.log(products);

    return (
        <>
        </>
    )
}