import React from "react";
import { Box, Container, Typography, colors } from "@mui/material";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material"


const Home = () => {

    return (
    
        <Box>
            <Container>
                <Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            color: 'white',
                            textAlign: 'center',
                            marginTop: '200px',
                            fontFamily: 'Avenir',
                            display: "flex"
                        }}
                    >
                        Create Your Account
                    </Typography>
                </Box>
                <Box
                    component="form"
                    sx={{
                        p: 2,
                        marginLeft: 53,
                        '& > :not(style)': { m: 1, width: '25ch' },
                        position: 'absolute'
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        id="filled-basic"
                        label="Username"
                        variant="filled"
                        sx={{
                            background: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 1
                        }}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        p: 2,
                        marginLeft: 53,
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
                            background: 'rgba(255, 255, 255, 0.5)',
                        }}
                    />
                </Box>
                <Box>
                    <Button
                        variant="outlined"
                        sx={{
                            backgroundColor: '#20B278',
                            marginLeft: 56,
                            paddingRight: 8,
                            paddingLeft: 14,
                            "&:hover": {
                                backgroundColor: 'grey'
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                paddingLeft: 1,
                                fontFamily: 'Avenir',
                                color: 'black'
                            }}
                        >
                            Submit
                        </Typography>
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
export default Home;