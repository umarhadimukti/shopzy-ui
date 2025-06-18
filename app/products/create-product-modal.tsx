import { Modal, Box } from "@mui/material";
import { Button, Stack, TextField, Link } from "@mui/material";

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
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={styles}>
                <form className="w-full max-w-xs">
                    <Stack spacing={2} className="w-full max-w-xs">
                        <TextField
                            name="name"
                            label="Fullname"
                            variant="outlined"
                            type="text"
                            error={!!state.error}
                            helperText={state.error}
                        />
                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            type="email"
                            error={!!state.error}
                            helperText={state.error}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            error={!!state.error}
                            helperText={state.error}
                        />
                        <Button type="submit" variant="contained">
                            Sign Up
                        </Button>
                        <Link component={NextLink} href="/auth/login" className="self-center">
                            Login
                        </Link>
                    </Stack>
                </form>
            </Box>
        </Modal>
    )
}