import { Button, Stack, TextField, Link } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
        <Stack spacing={2} className="w-full max-w-xs">
            <TextField label="Email Address" variant="outlined" type="email" />
            <TextField label="Password" variant="outlined" type="password" />
            <Button variant="contained">Login</Button>
            <Link component={NextLink} href="/auth/signup" className="self-center">
                Sign Up
            </Link>
        </Stack>
    </AuthLayout>
  )
}

export default Login;