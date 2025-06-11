"use client";

import { Button, Stack, TextField, Link } from "@mui/material";
import React, { useActionState } from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";
import login from "./login";

const Login = () => {
    const [state, formAction] = useActionState(login, { error: "" });

    return (
        <AuthLayout>
            <form action={formAction}>
                <Stack spacing={2} className="w-full max-w-xs">
                    <TextField
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        helperText={state.error}
                        error={!!state.error} />
                    <TextField
                        name="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        helperText={state.error}
                        error={!!state.error} />
                    <Button type="submit" variant="contained">Login</Button>
                    <Link component={NextLink} href="/auth/signup" className="self-center">
                        Sign Up
                    </Link>
                </Stack>
            </form>
        </AuthLayout>
    )
}

export default Login;