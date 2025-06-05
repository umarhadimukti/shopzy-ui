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
                <TextField name="email" label="Email Address" variant="outlined" type="email" />
                <TextField name="password" label="Password" variant="outlined" type="password" />
                <Button type="submit" variant="contained">Sign Up</Button>
                <Link component={NextLink} href="/auth/login" className="self-center">
                    Login
                </Link>
            </Stack>
            </form>
        </AuthLayout>
    )
}

export default Register;