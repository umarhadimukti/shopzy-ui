import { Box } from "@mui/material";

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box className="h-screen flex justify-center items-center">{children}</Box>
    )
}

export default AuthLayout;