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
                                    <SkillCard imageSrc={"/icons/html-logo.svg"} items={[">HTML 5"]}/>
                                    <SkillCard imageSrc={"/icons/css-logo.svg"} items={[">CSS 3"]}/>
                                    <SkillCard imageSrc={"/icons/js.png"}
                                               items={[">JavaScript", ">React", ">Bootstrap"]}/>
                                </div>

                                <h4 className="text-center">Backend &#123; &#125;</h4>
                                <div className="technical-container">
                                    <SkillCard imageSrc={"/icons/java.png"}
                                               items={[">Java", ">Spring Boot", ">JPA / Hibernate", ">JUnit 5", ">Mockito"]}/>
                                    <SkillCard imageSrc={"/icons/python.svg"} items={[">Python", ">Flask"]}/>
                                    <SkillCard imageSrc={"/icons/node.svg"}
                                               items={[">Node.js", ">Express.js", ">Sequelize.js"]}/>
                                    <SkillCard imageSrc={"/icons/sql.svg"}
                                               items={[">PostgreSQL", ">MySQL", ">MongoDB"]}/>
                                    <SkillCard imageSrc={"/icons/aws2.svg"}
                                               items={[">Cloud Computing", ">Cloud Deployments"]}/>
                                    <SkillCard imageSrc={"/icons/docker.svg"}
                                               items={[">Docker", ">Containerization"]}/>
                                </div>

                            </Tab>

                            <Tab eventKey="soft" title="Soft Skills">
                                <br/>

                                <div className="soft-container">

                                    <SkillCard imageSrc={"/icons/handshake.svg"} items={["Teamwork"]}/>
                                    <SkillCard imageSrc={"/icons/brainstorm.svg"} items={["Problem Solving"]}/>
                                    <SkillCard imageSrc={"/icons/target.svg"} items={["Goal Oriented"]}/>
                                    <SkillCard imageSrc={"/icons/org.svg"} items={["Organized"]}/>
                                    <SkillCard imageSrc={"/icons/adapt.svg"} items={["Adaptable"]}/>
                                    <SkillCard imageSrc={"/icons/empathy.svg"} items={["Empathetic"]}/>

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