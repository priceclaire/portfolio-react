
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import  Projects from './pages/Projects';
import  Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';

// import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Wrapper> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        {/* </Wrapper> */}
       
      </div>
    </Router>
  
  );
}

export default App;
