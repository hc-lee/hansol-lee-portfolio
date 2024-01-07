import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../styles/Skills.css";
import SkillCard from "./SkillCard.jsx";

function Skills() {

    return (
        <>
            <section id="skills">
                <div className="skills-container">
                    <h1>Skills</h1>
                    <div className="tabs-container">
                        <Tabs
                            defaultActiveKey="tech"
                            id="justify-tab-example"
                            className="mb-3"
                            justify
                        >
                            <Tab eventKey="tech" title="Technical Skills">
                                <br/>

                                <h4 className="text-center">&lt;Frontend /&gt;</h4>
                                <div className="technical-container">
                                    <SkillCard imageSrc={"src/assets/icons/html-logo.svg"} items={[">HTML 5"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/css-logo.svg"} items={[">CSS 3"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/js.png"}
                                               items={[">JavaScript", ">React", ">Bootstrap"]}/>
                                </div>

                                <h4 className="text-center">Backend &#123; &#125;</h4>
                                <div className="technical-container">
                                    <SkillCard imageSrc={"src/assets/icons/java.png"}
                                               items={[">Java", ">Spring Boot", ">JPA / Hibernate", ">JUnit 5", ">Mockito"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/python.svg"} items={[">Python", ">Flask"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/node.svg"}
                                               items={[">Node.js", ">Express.js", ">Sequelize.js"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/sql.svg"}
                                               items={[">PostgreSQL", ">MySQL", ">MongoDB"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/aws2.svg"}
                                               items={[">Cloud Computing", ">Cloud Deployments"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/docker.svg"}
                                               items={[">Docker", ">Containerization"]}/>
                                </div>

                            </Tab>

                            <Tab eventKey="soft" title="Soft Skills">
                                <br/>

                                <div className="soft-container">

                                    <SkillCard imageSrc={"src/assets/icons/handshake.svg"} items={["Teamwork"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/brainstorm.svg"} items={["Problem Solving"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/target.svg"} items={["Goal Oriented"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/org.svg"} items={["Organized"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/adapt.svg"} items={["Adaptable"]}/>
                                    <SkillCard imageSrc={"src/assets/icons/empathy.svg"} items={["Empathetic"]}/>

                                </div>

                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    );

}


export default Skills;