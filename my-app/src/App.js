import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, lightGreen } from '@mui/material/colors';
import CardBuilder from './components/CardBuilder';
import Nav from './components/Nav';
import Home from './screens/Home';
import About from './screens/About';
import Support from './screens/Support';
import Login from './screens/Login';



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
    <Router>
      <div className="App" >
        <ThemeProvider theme={theme}>
          <Nav/>
          <Routes>
            {/* <CardBuilder/> */}
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </ThemeProvider>
      </div>
    </Router>
  
   
  );
}

export default App;
