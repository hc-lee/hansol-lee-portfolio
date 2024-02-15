import React from 'react';
import '../styles/About.css';
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPerson} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

function About() {
    return (
        <>
            <section id="about">
                <Fade left cascade>
                <Container className="about-container">
                    <Row>
                        <Col>
                            <div className="left-col">
                                <img className="profile-pic" src="/photos/headshot.jpg" alt="Profile picture"/>
                            </div>
                        </Col>


                        <Col className="text-center">
                            <p className="paragraph">
                                <FontAwesomeIcon icon={faPerson} size={"2x"}/>
                                <h1> About Me: </h1>
                                <br/>
                                Hello! I'm Hansol, a former bioengineer from Seattle with experience in biochemical
                                research and sciences. I'm currently pursuing a second B.S. in Computer Science at Oregon State
                                University.
                                <br/>
                                <br />
                                During my time as a bioengineer, I discovered a passion for the high-level aspect of engineering and
                                problem-solving in biotech. This led me to pursue a software
                                engineering role, attracted by the low cost and accessibility of tools for project
                                development and exploration.
                                <br/>
                                <br/>
                                I am always excited to learn new things and passionate about developing new technologies.
                                It fascinates me to think about the future when computers empower individuals and societies to bear upon humanity's greatest challenges.
                            </p>
                            <a href="/assets/resume-hansol.pdf" download>
                                <Button variant="outline-light" size="md" className="resume-button">View Resume</Button>
                            </a>
                        </Col>
                    </Row>
                </Container>
                </Fade>
            </section>
        </>
    );
}

export default About;