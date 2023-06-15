import React from "react";
import LogoBadge from "./LogoBadge";
import techs from "../techs";
import YearBadge from "./YearBadge";

export default function ProjectCard({project}) {
    return (
        <div className="project-card">
            <img src={project.image} alt="" />
            <div className="project-card-text-container">
                <div className="project-card-info">
                    <h3>{project.title}</h3>
                    <div className="project-card-badges">
                        <YearBadge year={project.year}/>
                        {project.techStack.map((techName, i)=>{
                            const tech = techs.find(tech => tech.name === techName);
                            return (
                                <LogoBadge
                                    key={i}
                                    logo={tech.image}
                                    title={tech.title}
                                />
                            )
                        })}
                    </div>
                    <p>{project.description}</p>
                </div>
                <div className="project-card-link-container">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer"><div className="live-link">
                        <h4>View Live</h4>
                    </div></a>}
                    {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noreferrer"><div className="code-link">
                        <h4>View Code</h4>
                    </div></a>}
                </div>
            </div>
        </div>
    )
}