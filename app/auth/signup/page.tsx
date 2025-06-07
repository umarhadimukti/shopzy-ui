"use client";

import { Button, Stack, TextField, Link, Typography } from "@mui/material";
import React, { useActionState } from "react";
import NextLink from "next/link";
import AuthLayout from "../AuthLayout";
import createUser from "./create-user";

type ErrorState = {
  errorMap: Record<string, string>;
  error: string;
};

const initialState: ErrorState = {
  errorMap: {},
  error: "",
};

const Register = () => {
  const [state, formAction] = useActionState(createUser, initialState);

  return (
    <AuthLayout>
      <form action={formAction}>
        <Stack spacing={2} className="w-full max-w-xs">
          <TextField
            name="name"
            label="Fullname"
            variant="outlined"
            type="text"
            error={!!state.errorMap.name}
            helperText={state.errorMap.name}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            error={!!state.errorMap.email}
            helperText={state.errorMap.email}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            error={!!state.errorMap.password}
            helperText={state.errorMap.password}
          />
          {state.error && (
            <Typography color="error" variant="body2">
              {state.error}
            </Typography>
          )}
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
