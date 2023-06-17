import React from "react";
import techs from "../techs";
import SkillBadge from "../components/SkillBadge";

export default function Skills() {
    return(
        <div id="skills">
            <h3>My Tech Stack</h3>
            <div id="skills-container">
                {techs.map((tech, i) => <SkillBadge key={i} tech={tech}/>)}
            </div>
        </div>
    )
}