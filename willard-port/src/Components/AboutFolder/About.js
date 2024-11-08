import React from "react";
import './AboutStyles.css';


const About = () => {
    return(
        <div className="aboutContainer">
            <h1>About</h1>
            <main className="flexContainer">
                <section className="flexOne">
                    <h2>Hi! My name's Zeph.</h2>
                    <p className="aboutPara" style={{fontWeight:"lighter"}}>
                        Back in 2023, I decided to switch things up and pursue a career in tech.
                        Earlier this year I completed Hack the Gap's Bootcamp for Frontend Development,
                        where I earned these meta certificates.<br></br><br></br>
 {/* Journey into Tech */}

                        Currently I am completing an internship with We Sparkle, a start-up tech company, where my focus has been
                        updating existing features, styles, and functionality of WeSparkle's website.<br></br><br></br>
{/* Working on today */}

                        I most enjoy building software that combines aesthetic design and creative functionality to make for
                        a fun and smooth user experience
{/* Tech interests (non specific) */}

                        . In my free time I enjoy designing conceptual apps that I plan to build. I also love learning more about
                        web development in general, and I am currently taking an online certificate course by meta for Backend Development.<br></br><br></br>
{/* Tech free time (specific) */}

                        When I'm not on my computer, I'm usually writing music, hiking, watching a new movie, rhyming, reading about the brain, or
                        running around in the rain.<br></br><br></br><br></br>
{/* Personal interests */}

                        {/* Outline:
                        - 2023 i was looking to get into tech.
                        -in 2024 i found htg Bootcamp, currently internhsip.
                        -this is what i worked on / am working on in bootcamp and internship.
                        -these are tech interests.
                        -these are my personal interests. */}

                    </p>
                </section>
                <section className="flexTwo">
                    <h2>Certificates:</h2>
                    <div>
                        <ul className="certificateContainer">
                            <li>
                                <a href="https://coursera.org/verify/professional-cert/W2D4Y9WEGJSF">Meta Frontend Developer</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/MXEPGWP3R8RD">Coding Interview Preparation</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/HXDWNU87WY8Q">Advanced React</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/JF797RNQ7PFY">Principles of UX/UI Design</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/JHK928KS5QGZ">React Basics</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/2HUBWA69XH86">HTML and CSS in Depth</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/GTETVUTVQJK9">Programming With JavaScript</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/2ZP254AZSHLS">Version Control</a>
                            </li>
                            <li>
                                <a href="https://www.coursera.org/account/accomplishments/records/3MFSE82WJ9UZ">Introduction to Frontend Development</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="askAboutContainer">
                        <h2>Ask me about:</h2>
                    </div> */}
                </section>
            </main>
        </div>
    )
};

export default About;