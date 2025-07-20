"use client";

import { Button, Stack, TextField, Link, Card } from "@mui/material";
import React, { useActionState } from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";
import login from "./login";

const Login = () => {
    const [state, formAction] = useActionState(login, { error: "" });

    return (
        <AuthLayout>
            <Card
                sx={{
                    px: { xs: 4, sm: 8, md: 13, lg: 15 },
                    py: 9,
                    width: "100%",
                    maxWidth: "500px"
                }}>
                <form action={formAction} className="w-full">
                    <Stack spacing={2} className="w-full">
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
                        <Stack direction="row" justifyContent="space-between" className="text-xs">
                            <Link component={NextLink} href="/auth/signup" className="self-center">
                                Sign Up
                            </Link>
                            <Link component={NextLink} href="/auth/forgot-password" className="self-center">
                                Forgot Password
                            </Link>

                        </Stack>
                    </Stack>
                </form>
            </Card>
        </AuthLayout>
    )
}

export default Login;