import React from "react";

export default function SkillBadge({tech}) {
    return (
        <div className="skill" title={tech.title}>
            <img src={tech.image} alt={tech.title}/>
        </div>
    )
}