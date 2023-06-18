import React from "react";
import { AppBar, MenuItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import App from "../App";


const pages = ['Products', 'Support', 'About Us'];

const Nav = () => {
    return(
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
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#20B278',
                            textDecoration: 'none',
                        }}
                    >
                        Nest
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            paddingLeft: '50px'

                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav