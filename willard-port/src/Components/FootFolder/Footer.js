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


const socials = [
    {
      icon: faEnvelope,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    // {
    //   icon: faMedium,
    //   url: "https://medium.com",
    // },
    // {
    //   icon: faStackOverflow,
    //   url: "https://stackoverflow.com",
    // },
  ];


const Footer = () =>{
    return(
        <footer className="footerContainer">
             <div className="flex-container">
                {/* <img src={Logo} className="logo" alt="Logo"/> */}
                <nav>
                    {/* Add social media links based on the `socials` data */}
                    <HStack spacing={12} style={{marginLeft:"1vw"}} >
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