import React from "react";
import { Box, Container, Typography, colors } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material"


const Home = () => {

    return (

        <Container>
            <Box>
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        marginTop: '200px',
                        fontFamily: 'Avenir'
                    }}
                >
                    Create Your Account
                </Typography>
            </Box>
        </Container>

    )

}
export default Home;