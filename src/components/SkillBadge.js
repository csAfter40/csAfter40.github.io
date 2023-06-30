import React from "react";

export default function SkillBadge({tech, handleClick, isSelected}) {
    return (
        <div className={`skill ${isSelected ? "selected": ""}`} title={tech.title} onClick={handleClick}>
            <img src={tech.image} alt={tech.title}/>
        </div>
    )
}