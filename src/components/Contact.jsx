import React from "react";
import "../styles/Contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

function Contact() {

    return (
        <>
            <section id={"contact"}>

                <Fade left cascade>

                    <div className="contact-container">
                        <FontAwesomeIcon icon={faAddressBook} size={"3x"}/>
                        <br/>
                        <h1>Contact Me</h1>
                        <br/>

                        <p>Get in touch by connecting with me on <a href={"https://linkedin.com/in/hansol-c-lee"}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer">LinkedIn</a> or by e-mail
                            at hclee672@gmail.com</p>
                        <p>Thanks for stopping by!</p>
                        <br/>
                        © 2024 Hansol Lee
                    </div>
                </Fade>

            </section>
        </>
    )

}

export default Contact;