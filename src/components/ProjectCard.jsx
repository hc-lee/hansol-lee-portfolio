import React from "react";
import "../styles/ProjectCard.css";
import {Button, Col, Row} from "react-bootstrap";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";

// eslint-disable-next-line react/prop-types
function ProjectCard({ name, imageSrc, description, languages, hasRepo, repoUrl, isLive, liveUrl, buttonText} ) {
    return (
        <>
            <div className="project-card">

                <Container>
                    <Row>
                        <Col xs={6} className="name-column">
                            <h5><strong>&lt;{name} /&gt;</strong></h5>
                        </Col>
                        <Col className="project-card-image">
                            <img src={imageSrc} alt={`${name} logo`}/>
                        </Col>
                    </Row>
                </Container>

                <div className="project-card-description">
                    {description}
                </div>

                {hasRepo && (
                    <Button href={repoUrl} variant="outline-light" size="sm" className="github-button" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon-here"/>
                        Repository
                    </Button>
                )}

                {isLive && (
                    <Button
                        href={liveUrl}
                        variant="outline-light"
                        size="sm"
                        className="github-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGlobe} className="icon-here"/>
                        {buttonText}
                    </Button>
                )}

                <hr className="button-div"/>

                <div className="project-card-text">
                    <strong>Stack:</strong>
                    <br/>
                    {languages}
                </div>
            </div>
        </>
    );
}


export default ProjectCard;