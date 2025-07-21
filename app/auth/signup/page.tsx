"use client";

import { Button, Stack, TextField, Link, Card } from "@mui/material";
import React, { useActionState } from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";
import createUser from "./create-user";


const Register = () => {
    const [state, formAction] = useActionState(createUser, { error: "" });

    return (
        <AuthLayout>
            <Card
                sx={{
                    px: { xs: 4, sm: 8, md: 13, lg: 15 },
                    py: 2,
                    width: "100%",
                    maxWidth: "600px",
                    minHeight: "300px",
                }}
                className="">
                <Stack direction="row" rowGap="5px">
                    
                </Stack>
                <form action={formAction} className="w-full">
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
            </Card>
        </AuthLayout>
    );
};

export default Register;
