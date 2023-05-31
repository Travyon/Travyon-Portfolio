import { Router, Route } from 'react-router-dom';
import Header from './components/Header';
import React from 'react';



function App() {
  return (
      <div className="App">
        <Header/>
        {/* <Router>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<x/>}/>
          <Route path="/education" element={<y/>}/>
          <Route path="/technicalskills" element={<z/>}/>
          <Route path="/experience" element={<NotFound/>}/>
          <Route path="/projects" element={<null/>}/>
          <Route path="/professionalleadership" element={<null/>}/>
        </Router> */}
      </div>
   
  );
}

export default App;
