import React from "react";
import techs from "../techs";
import SkillBadge from "../components/SkillBadge";

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = React.useState(techs[0])
    return(
        <div id="skills">
            <h3>My Tech Stack</h3>
            <div id="skills-container">
                {
                    techs.map((tech, i) => {
                        return <SkillBadge 
                            key={i} 
                            tech={tech} 
                            handleClick={()=>setSelectedSkill(tech)}
                            isSelected={selectedSkill===tech}
                        />
                    })
                }
            </div>
            <div id="skills-text-container">
                <h3>{selectedSkill.title}</h3>
                {selectedSkill.text.split("\n")
                    .map(paragraph=>{
                        return <p>{paragraph}</p>
                    })
                }
            </div>
            
        </div>
    )
}