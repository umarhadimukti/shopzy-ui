"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../auth/auth-context";
import { routes, unauthenticatedRoutes } from "../common/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
    logout: () => Promise<void>;
}

export default function Header({ logout }: HeaderProps) {
    const router = useRouter();

    const isAuthenticated = React.useContext(AuthContext);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = isAuthenticated ? routes : unauthenticatedRoutes;

    return (
        <AppBar position="absolute">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
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

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                >
                    {pages.map((page) => (
                    <MenuItem key={page.title} onClick={() => {
                        router.push(page.path);
                        handleCloseNavMenu();
                    }}>
                        <Typography sx={{ textAlign: "center" }}>{page.title}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
                <ShoppingBasketIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                }}
                >
                Shopzy
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                    <Button
                    key={page.title}
                    onClick={() => {
                        router.push(page.path);
                        handleCloseNavMenu();
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                    >
                    {page.title}
                    </Button>
                ))}
                </Box>
                {isAuthenticated && <Settings logout={logout}/>}
            </Toolbar>
            </Container>
        </AppBar>
    );
}

const Settings = ({ logout }: HeaderProps) => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/person.png" sx={{ padding: "5px" }} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem key="Logout" onClick={async () => {
                    await logout();
                    handleCloseUserMenu();
                }}>
                    <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}