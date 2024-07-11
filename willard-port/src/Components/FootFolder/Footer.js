import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { HStack, Box } from "@chakra-ui/react";
import Logo from "../../Images/Logo.png";
import "./FooterStyles.css";

//working on way to provide gmail.
const email = [
    {
        icon: faEnvelope,
        // url: "zepiwillard@gmail.com",
      }
];
const socials = [
   
    {
      icon: faGithub,
      url: "https://github.com/ZephaniahWillard2",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/zeph-willard2",
    },
  ];


const Footer = () =>{
    return(
        <footer className="footerContainer">
             <div className="flex-container">
                {/* <img src={Logo} className="logo" alt="Logo"/> */}
                <nav>
                    {/* Add social media links based on the `socials` data */}
                    <HStack spacing={16} style={{marginLeft:"1vw"}} >
                        {/* Add gmail stuff here */}
                    {email.map((email) =>(
                        <a href={email.url}>
                        <FontAwesomeIcon icon={email.icon} size="2x" className="emailIcon"/>
                        </a>))}
                    {socials.map((social) => (
                        <a href={social.url}>
                        <FontAwesomeIcon icon={social.icon} size="2x" className="faIcon"/>
                        </a>
                    ))}
                    </HStack>
                </nav>
                {/* <div className="contact">Contact</div>
                <div className="social">Social</div>
                <div className="careers">Careers</div> */}
            </div>
        </footer>
    );
};

export default Footer;