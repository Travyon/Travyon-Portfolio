import React from "react";
import { Box, Container, Typography, colors } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material"


const StyledTextField = styled(TextField)(() => ({
    

}));
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
            <div>
            </div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            </Box>
        </Container>

    )

}
export default Home;