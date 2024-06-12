import React from "react";
import MyLogoo from "../../Images/MyLogoo.png";
import "./FooterStyles.css";

const Footer = () =>{
    return(
        <footer className="footerContainer">
             <div className="flex-container">
                <img src={MyLogoo} className="logo" alt="Logo"/>
                <div className="contact">Contact</div>
                <div className="social">Social</div>
                <div className="careers">Careers</div>
            </div>
        </footer>
    );
};

export default Footer;