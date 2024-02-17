
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import  Projects from './pages/ProjectsAll';
import  Contact from './pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Wrapper> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        {/* </Wrapper> */}
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
