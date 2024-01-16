import React from "react";
import "../styles/SkillCard.css";
import Fade from "react-reveal/Fade";

// eslint-disable-next-line react/prop-types
function SkillCard({imageSrc, items}) {
    return (
        <>
            <Fade left cascade>
                <div className="skill-card">

                    <div className="skill-card-image">
                        <img src={imageSrc} alt={"Programming language image"}/>
                    </div>
                    <div className="skill-card-text">
                        <ul>
                            {/* eslint-disable-next-line react/prop-types */}
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </Fade>
        </>
    );
}


export default SkillCard;