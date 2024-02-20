
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './src/pages/Home';
import  ProjectsAll from './src/pages/ProjectsAll';
import  ProjectChoice from './src/pages/ProjectChoice';
import  Contact from './src/pages/Contact';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

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
