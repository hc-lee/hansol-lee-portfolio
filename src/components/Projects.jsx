import React from "react";
import "../styles/Projects.css";

import ProjectCard from "./ProjectCard.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiagramProject} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

function Projects() {

    return (
        <>
            <section id={"projects"}>
                <Fade left cascade>
                <div className="projects-container">
                    <FontAwesomeIcon icon={faDiagramProject} size={"2x"}/>
                    <br/>
                    <h1>Recent Projects</h1>

                    <div className="project-card-container">

                        <ProjectCard name={"SeqWise"}
                                     imageSrc={"/icons/seqwise.jpg"}
                                     description={"Full-stack Java web-application for analysis of short nucleotide sequences (in progress)."}
                                     languages={"Java, Spring Boot, AWS Elastic Beanstalk, AWS RDS, JavaScript, React"}
                                     hasRepo={false}
                                     repoUrl={""}
                                     isLive={false}
                                     liveUrl={""}
                        />

                        <ProjectCard name={"DreamScape.ai"}
                                     imageSrc={"/photos/dreamscape.PNG"}
                                     description={"Full-stack JavaScript web-application for analysis of short nucleotide sequences."}
                                     languages={"Java, Spring Boot, JavaScript, React"}
                                     hasRepo={true}
                                     repoUrl={"https://github.com/hc-lee/DreamScape-Server"}
                                     isLive={true}
                                     liveUrl={"https://frabjous-heliotrope-3148d9.netlify.app/"}
                                     buttonText={"See Live"}
                        />


                        <ProjectCard name={"MyHealthCare"}
                                     imageSrc={"/icons/mhc.jpg"}
                                     description={"Full-stack JavaScript web-application for analysis of short nucleotide sequences."}
                                     languages={"JavaScript, React, Node.js, Express.js, Sequelize.js, PostgreSQL"}
                                     hasRepo={true}
                                     repoUrl={"https://github.com/hanhuazhu/winterhackathon"}
                                     isLive={true}
                                     liveUrl={"https://devpost.com/software/myhealthcare"}
                                     buttonText={"See Devpost"}
                        />

                        <ProjectCard name={"Othello"}
                                     imageSrc={"/photos/othello.PNG"}
                                     description={"Full-stack JavaScript web-application for analysis of short nucleotide sequences."}
                                     languages={["Python (CLI)"]}
                                     hasRepo={true}
                                     repoUrl={"https://github.com/hc-lee/reversi-othello"}
                        />

                        <ProjectCard name={"Web Portfolio"}
                                     imageSrc={"/photos/portfolio.PNG"}
                                     description={"Overhauled web portfolio written with React + Vite to showcase projects and introduce myself."}
                                     languages={"JavaScript, React, Bootstrap"}
                                     hasRepo={false}
                                     isLive={false}
                        />



                    </div>
                </div>
                </Fade>
            </section>

        </>
    )

}

export default Projects;