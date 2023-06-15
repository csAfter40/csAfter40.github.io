import React from "react";
import projects from "../projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return(
        <div id="portfolio">
            <h3>My Projects</h3>
            {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
        </div>
    )
}