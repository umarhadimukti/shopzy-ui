"use client";

import { Button, Stack, TextField, Link, Card } from "@mui/material";
import React, { useActionState } from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";
import createUser from "./create-user";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Register = () => {
    const [state, formAction] = useActionState(createUser, { error: "" });
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
                    <Stack spacing={2} className="w-full max-w-xs">
                        <TextField
                            name="name"
                            label="fullname"
                            variant="outlined"
                            type="text"
                            error={!!state.error}
                            helperText={state.error}
                            sx={{
                                backgroundColor: "black",
                                outline: "none",
                                border: "none",
                                ring: "none",
                                borderRadius: "5px",
                            }}
                        />
                        <TextField
                            name="email"
                            label="email address"
                            variant="outlined"
                            type="email"
                            error={!!state.error}
                            helperText={state.error}
                            sx={{
                                backgroundColor: "black",
                                outline: "none",
                                border: "none",
                                ring: "none",
                                borderRadius: "5px",
                            }}
                        />
                        <TextField
                            name="password"
                            label="password"
                            variant="outlined"
                            type="password"
                            error={!!state.error}
                            helperText={state.error}
                            sx={{
                                backgroundColor: "black",
                                outline: "none",
                                border: "none",
                                ring: "none",
                                borderRadius: "5px",
                            }}
                        />
                        <Button type="submit" variant="contained">
                            Sign Up
                        </Button>
                        <Link component={NextLink} href="/auth/login" className="self-center">
                            Login
                        </Link>
                    </Stack>
                </form>
            </Card>
        </AuthLayout>
    );
};

export default Register;
