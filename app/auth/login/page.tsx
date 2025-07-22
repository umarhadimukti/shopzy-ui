"use client";

import { Button, Stack, TextField, Link, Card } from "@mui/material";
import React, { useActionState } from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";
import login from "./login";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Login = () => {
    const [state, formAction] = useActionState(login, { error: "", email: "" });

    return (
        <AuthLayout>
            <Card
                sx={{
                    px: { xs: 4, sm: 6, md: 8, lg: 10 },
                    py: 5,
                    width: "100%",
                    maxWidth: "500px",
                    minHeight: "300px",
                    borderRadius: "2%",
                    boxShadow: 3,
                }}>
                <Stack
                    sx={{
                        width: "100%",
                        marginBottom: 3,
                    }}
                    direction="row"
                    rowGap="3px"
                    alignItems="center"
                    justifyContent="center">
                    <ShoppingBasketIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                            textTransform: "uppercase",
                        }}>
                        Shopzy
                    </Typography>
                </Stack>
                <form action={formAction} className="w-full">
                    <Stack spacing={2} className="w-full">
                        <TextField
                            name="email"
                            label="email address"
                            variant="outlined"
                            type="email"
                            defaultValue={state.email}
                            error={!!state.error}
                            sx={{
                                backgroundColor: "black",
                                outline: "none",
                                border: "none",
                                ring: "none",
                                borderRadius: "5px",
                            }}/>
                        <TextField
                            name="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            error={!!state.error}
                            sx={{
                                backgroundColor: "black",
                                outline: "none",
                                border: "none",
                                ring: "none",
                                borderRadius: "5px",
                            }}/>
                        {state.error && (
                            <Typography
                                color="error"
                                variant="body2"
                                aria-live="polite"
                                sx={{ mt: -1, mb: 3, }}>
                                {state.error}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#19b0e0",
                                '&:hover': {
                                    backgroundColor: "#148fb9",
                                },
                                border: "none",
                                outline: "none",
                                ring: "none",
                            }}>
                            Login
                        </Button>
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