import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./Components/HomeFolder/HomePage";
import About from "./Components/AboutFolder/About";
import Header from "./Components/HeadFolder/Header";
import Contact from "./Components/ContactFolder/Contact";
import Projects from "./Components/ProjectsFolder/Projects";
import ContactMeSection from "./Components/ContactFolder/ContactMeSection";
import { AlertProvider } from "./Components/Context/alertContext";
import Footer from "./Components/FootFolder/Footer";
import Alert from "./Components/AlertFolder/Alert";
import './App.css';

function App() {

  const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <Router>
          <Header/>
            <Routes>
              <Route exact path="/" element={<HomePage/>} className="home"/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<ContactMeSection/>}/>
            </Routes>
            <Footer/>
          </Router>
        </AlertProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
