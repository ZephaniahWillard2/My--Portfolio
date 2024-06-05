import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./Components/HomeFolder/HomePage";
import About from "./Components/AboutFolder/About";
import Header from "./Components/HeadFolder/Header";
import Contact from "./Components/ContactFolder/Contact";
import Projects from "./Components/ProjectsFolder/Projects";
import './App.css'

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
