import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, lightGreen } from '@mui/material/colors';
import Login from './screens/Login';
import CardBuilder from './components/CardBuilder';



const theme = createTheme({
   palette: {
     primary: {
        main: '#000000',
     },
     secondary: lightGreen
   },
});

const App = () => {
  return (
      <div className="App" >
        <ThemeProvider theme={theme}>
          <Login/>
          {/* <CardBuilder/> */}
        </ThemeProvider>
      </div>
   
  );
}

export default App;
