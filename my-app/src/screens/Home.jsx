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
                        textAlign: 'center',
                        marginTop: '200px',
                        fontFamily: 'Avenir'
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
                }}
                noValidate
                autoComplete="off"
            >
                
              <TextField 
                id="filled-basic" 
                label="Username" 
                variant="filled"
                sx={{
                    background: 'lightgrey',
                    borderRadius: 2
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
                    background: 'lightgrey',
                    borderRadius: 2,
                    opacity: 1
                   
                }} 
              />  
              
            </Box>
            <Box>
              <Button variant="outlined" sx={{backgroundColor: '#20B278', marginLeft: 56, paddingRight: 10, paddingLeft: 10}}>Submit</Button>
            </Box>
        </Container>

    )

}
export default Home;