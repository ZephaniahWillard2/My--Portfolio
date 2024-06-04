import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./Components/HomeFolder/HomePage";
import About from "./Components/AboutFolder/About";
import Header from "./Components/HeadFolder/Header";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
