import React from "react";
import "../styles/SkillCard.css";

// eslint-disable-next-line react/prop-types
function SkillCard( {imageSrc, items} ) {
    return (
        <>
            <div className="skill-card">
                <div className="skill-card-image">
                    <img src={imageSrc}  alt={"Java"}/>
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
        </>
    );
}


export default SkillCard;