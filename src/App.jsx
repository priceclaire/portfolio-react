
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import  ProjectsAll from './pages/ProjectsAll';
import  ProjectChoice from './pages/ProjectChoice';
import  Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

// import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Wrapper> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Projects" element={<ProjectsAll/>} />
            <Route path="/Detail" element={<ProjectChoice/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        {/* </Wrapper> */}
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
