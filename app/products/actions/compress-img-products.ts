import { gzip } from "pako";

export default async function compressImageProducts(file: File): Promise<Blob | { error: string }> {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const compressedData = gzip(new Uint8Array(arrayBuffer));
        
        return new Blob([compressedData], { type: "application/octet-stream" });
    } catch (error) {
        console.error(`Error compressing image products: ${error}`);
        return { error: "Failed to compress image" };
    }
}