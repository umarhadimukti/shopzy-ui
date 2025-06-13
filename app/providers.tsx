import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactElement } from "react";
import darkTheme from "./dark.theme";
import { ThemeProvider } from "@mui/material";

interface ProvidersProp {
    children: ReactElement[],
};

export default function Providers({ children }: ProvidersProp) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
    );
}