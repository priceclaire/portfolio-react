
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

// import Wrapper from './components/Wrapper';


function App() {
  return (
    // <Router>
    //   <div>
    //     <Navbar />
    //     {/* <Wrapper> */}
    //       <Routes>
    //         <Route path="/" element={<Home/>} />
    //         <Route path="/Projects" element={<Projects/>} />
    //         <Route path="/About" element={<About/>} />
    //         <Route path="/Contact" element={<Contact/>} />
    //       </Routes>
    //     {/* </Wrapper> */}
       
    //   </div>
    // </Router>
    <Home />
  );
}

export default App;
