import { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./Components/HomeFolder/HomePage";
import About from "./Components/AboutFolder/About";
import Header from "./Components/HeadFolder/Header";
import ContactMeSection from "./Components/ContactFolder/ContactMeSection";
import Projects from "./Components/ProjectsFolder/Projects";
import { AlertProvider } from "./Components/Context/alertContext";
import Alert from "./Components/AlertFolder/Alert";
import './App.css';
import Footer from "./Components/FootFolder/Footer";
import './Components/NavFolder/NavStyles.css';

import Logo from '../src/Images/Logo.png';

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

  


    useEffect(() => {
        // Select all anchor elements that link to an ID within the page
        const anchors = document.querySelectorAll('a[href^="#"]');
        
        const handleClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        // Attach event listeners to each anchor element
        anchors.forEach(anchor => anchor.addEventListener('click', handleClick));
        
        // Cleanup function to remove listeners when component unmounts
        return () => {
            anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
        };
    }, []); // Empty dependency array to run this effect only on mount

   





  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <Router>
            <Header/>
            <nav className="navContainer">
              <ul className="navList">
              <li className="homeLink">
                  <a href="#home" style={{ textDecoration: 'none' }}>
                    <img src={Logo} className="navLogo" alt="Logo" style={{ height: "5vh" }}/>
                  </a>
                </li>
                <li><a href="#about" style={{ textDecoration: 'none' }}>About</a></li>
                <li><a href="#projects" style={{ textDecoration: 'none' }}>Projects</a></li>
                <li><a href="#contact" style={{ textDecoration: 'none' }}>Contact</a></li>
                <Footer/>
                </ul>
             
            </nav>

            {/* Main content sections with IDs for hash navigation */}
            <div id="home">
              <HomePage/>
            </div>
            <div id="about">
              <About/>
            </div>
            <div id="projects">
              <Projects/>
            </div>
            <div id="contact">
              <ContactMeSection/>
            </div>
          </Router>
        </AlertProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;




















// import React from "react";
// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import HomePage from "./Components/HomeFolder/HomePage";
// import About from "./Components/AboutFolder/About";
// import Header from "./Components/HeadFolder/Header";
// import Contact from "./Components/ContactFolder/Contact";
// import Projects from "./Components/ProjectsFolder/Projects";
// import ContactMeSection from "./Components/ContactFolder/ContactMeSection";
// import { AlertProvider } from "./Components/Context/alertContext";
// import Alert from "./Components/AlertFolder/Alert";
// import './App.css';
// import Footer from "./Components/FootFolder/Footer";
// import Logo from '../src/Images/Logo.png';


// function App() {

//   const theme = extendTheme({
//   styles: {
//     global: () => ({
//       body: {
//         bg: "",
//       },
//     }),
//   },
// });

//   return (
//     <div className="App">
//       <ChakraProvider theme={theme}>
//         <AlertProvider>
//           <Router>
//           <Header/>
//           <nav className="navContainer">
//             <ul className="navList">
//                 <li className="homeLink"><Link to="/" style={{textDecoration:'none'}}><img src={Logo} className="navLogo" alt="Logo" style={{height:"5vh"}}/></Link></li>
//                 <li><Link to="/about" style={{textDecoration:'none'}}>About</Link></li>
//                 <li><Link to="/projects" style={{textDecoration:'none'}}>Projects</Link></li>
//                 <li><Link to="/contact" style={{textDecoration:'none'}}>Contact</Link></li>
//                 <Footer/>
//             </ul>
//         </nav>
//             <Routes>
//               <Route exact path="/" element={<HomePage/>} className="home"/>
//               <Route path="/about" element={<About/>}/>
//               <Route path="/projects" element={<Projects/>}/>
//               <Route path="/contact" element={<ContactMeSection/>}/>
//             </Routes>
            
//           </Router>
//         </AlertProvider>
//       </ChakraProvider>
//     </div>
//   );
// }

// export default App;
