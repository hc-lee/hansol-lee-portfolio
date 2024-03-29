import React from "react";
import "../styles/Home.css";
import Background from "./Background.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {Button} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <>
            <section id={"home"}>
                <div className="background-container">
                    <Background/>

                    <div className="home-section">
                        <div className="home-content animate__animated animate__fadeIn">
                            <p className="home-content "> Hey! I'm <span className="name">Hansol.</span></p>
                            <p>Engineer | Programmer | Scientist | Learner | Hiker | Musician</p>
                        </div>
                        <div className="icons animate__animated animate__fadeIn">
                            <a href="https://linkedin.com/in/hansol-c-lee" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
                            </a>
                            <a href="https://github.com/hc-lee" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                            </a>
                        </div>
                        <Button href="#about" variant="outline-light" size="lg" className="about-button animate__animated animate__fadeIn">More
                            about me</Button>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Home;