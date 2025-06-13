import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactElement } from "react";
import darkTheme from "./dark.theme";
import { ThemeProvider } from "@mui/material";
import { AuthContext } from "./auth/auth-context";

interface ProvidersProp {
    children: ReactElement[],
    authenticated: boolean,
};

export default async function Providers({ children, authenticated }: ProvidersProp) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
                <AuthContext.Provider value={authenticated}>{children}</AuthContext.Provider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}