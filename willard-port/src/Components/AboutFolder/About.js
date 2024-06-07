import React from "react";
import './AboutStyles.css'


const About = () => {
    return(
        <div className="aboutContainer">
            <h1>About</h1>
            <main className="flexContainer">
                <section className="flexOne">
                    <h2>Hi! I'm Zeph,</h2>
                    <p> And I'm a Frontend and Web Developer. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Adipiscing bibendum est ultricies integer quis auctor elit. 
                        Massa enim nec dui nunc mattis enim ut tellus. 
                        Ipsum dolor sit amet consectetur adipiscing elit duis tristique. 
                        Pharetra diam sit amet nisl suscipit adipiscing bibendum. 
                        Nulla facilisi nullam vehicula ipsum. Et netus et malesuada fames ac.
                    </p>
                </section>
                <section className="flexTwo">
                    <h2>Ask Me About...</h2>
                    <div>
                        <ul className="topicContainer">
                            <li>Filler text</li>
                            <li>Filler text</li>
                            <li>Filler text</li>
                            <li>Filler text</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default About;