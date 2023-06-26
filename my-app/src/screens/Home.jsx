import React from "react";
import { Box, Container, Typography, colors } from "@mui/material";
import { TextField, Button } from "@mui/material";
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
                        marginLeft: 56.4,
                        marginTop: '200px',
                        fontFamily: 'Avenir',
                        display: "flex",
                        flexDirection: 'column',
                        lineHeight: '22px',
                    }}
                >
                    Create Your Account
                </Typography>
            </Box>
            <Box
                component="form"
                sx={{
                    p: 2,
                    marginLeft: 52,
                    '& > :not(style)': { m: 1, width: '25ch' },
                    margingTop: 25,

                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="filled-basic"
                    label="Username"
                    variant="filled"
                    sx={{
                        background: 'rgba(217, 217, 217, 0.38)',
                        borderRadius: 1,
                    }}
                />
            </Box>
            <Box
                component="form"
                sx={{
                    p: 2,
                    width: '442px',
                    height: '75px',
                    flexShrink: '0',
                    marginLeft: 52,
                    marginTop: -4,
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
            >
                <TextField
                    id="filled-basic"
                    label="Password"
                    variant="filled"
                    sx={{
                        borderRadius: 1.5,
                        opacity: 1,
                        background: 'rgba(217, 217, 217, 0.38)',
                    }}
                />
            </Box>
            <Box>
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: '#20B278',
                        width: '250px',
                        height: '45px',
                        flexShrink: '0',
                        marginLeft: 55,
                        "&:hover": {
                            backgroundColor: 'grey'
                        },
                        alignItems: 'center'
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Container>

    )
}
export default Home;