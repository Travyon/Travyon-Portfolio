import React from "react";
import { AppBar, MenuItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom';
import { styled } from "@mui/material";


const pages = [
    'Products',
    'Support',
    'About Us'
];
const signIn = ['Sign In'];
const StyledLink = styled(Link)(() => ({
    color: 'white',
    '&:hover': {
        color: '#20B278'
    },
    textDecoration: 'none'

}));


const Nav = () => {
    return (
        <AppBar>
            <Container
                maxWidth="xl"
            >
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            fontFamily: 'Avenir',
                            fontWeight: 900,
                            letterSpacing: '.1rem',
                            color: '#20B278',
                            textDecoration: 'none',
                        }}
                    >
                        Trail
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            paddingLeft: '50px',


                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem
                                key={page}
                            >
                                <StyledLink to={`/${page.replace(/\s+/g, '-').toLowerCase()}`}>{page}</StyledLink>
                            </MenuItem>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            paddingLeft: '200px'

                        }}
                    >
                        {signIn.map((theSignIn) => (
                            <MenuItem
                                key={theSignIn}
                            >
                                <Typography
                                    sx={{
                                        '&:hover': {
                                            color: "#20B278",
                                        }
                                    }}
                                >
                                    {theSignIn}
                                </Typography>
                            </MenuItem>
                        ))}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav;