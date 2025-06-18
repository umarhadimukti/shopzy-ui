"use client";

import { Modal, Box } from "@mui/material";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import createProduct from "./create-product";

const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface CreateProductModalProps {
    open: boolean;
    handleClose: () => void;
}

export default function CreateProductModal({ open, handleClose }: CreateProductModalProps) {
    const [response, setResponse] = useState<FormResponse>();

    const onClose = () => {
        setResponse(undefined);
        handleClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styles}>
                <form
                    className="w-full max-w-xs"
                    action={async (formData) => {
                        const response = await createProduct(formData);
                        setResponse(response);
                        if (!response?.error) {
                            onClose();
                        }
                    }}
                >
                    <Stack spacing={2} className="w-full max-w-xs">
                        <TextField
                            name="name"
                            label="Product Name"
                            variant="outlined"
                            type="text"
                            required
                            error={!!response?.error}
                            helperText={response?.error}
                        />
                        <TextField
                            name="description"
                            label="Description"
                            variant="outlined"
                            required
                            error={!!response?.error}
                            helperText={response?.error}
                        />
                        <TextField
                            name="price"
                            label="Price"
                            variant="outlined"
                            required
                            error={!!response?.error}
                            helperText={response?.error}
                        />
                        <Button type="submit" variant="contained">
                            Save
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Modal>
    )
}