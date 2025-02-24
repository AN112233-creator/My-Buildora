/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Home"
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */

import About from "./About";
import Projects from "./projects";
import Services from "./services";
import Clients from "./Clients";
import Contact from "./Contacts";
import Blog from "./Blogs";

function App() {
  

  return (

        <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
       
        
          </Routes>
        </Router>
      );
    };
  
/* 
    <Router>
    <Home />
    
   <Routes>
    <Route path = "/about" element = {<About />} />
   
    </Routes>

    </Router> */
   
 

     


export default App
