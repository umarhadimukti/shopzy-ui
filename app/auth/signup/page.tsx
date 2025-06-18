"use client";

import { Button, Stack, TextField, Link } from "@mui/material";
import React, { useActionState } from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";
import createUser from "./create-user";


const Register = () => {
    const [state, formAction] = useActionState(createUser, { error: "" });

    return (
        <AuthLayout>
            <form action={formAction}>
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
        </AuthLayout>
    );
};

export default Register;
