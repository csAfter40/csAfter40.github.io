import React from "react";
import LogoBadge from "./LogoBadge";
import techs from "../techs";
import CarouselModal from "./CarouselModal";
import VideoModal from "./VideoModal";


export default function ProjectCard({project}) {
    const [carouselModalShow, setCarouselModalShow] = React.useState(false);
    const [videoModalShow, setVideoModalShow] = React.useState(false);
    console.log(carouselModalShow)
    return (
        <>
            <div className="project-card">
                <img src={project.image} alt="" onClick={()=>setCarouselModalShow(true)}/>
                <div className="project-card-text-container">
                    <div className="project-card-info">
                        <h3>{project.title} <span style={{color: "#aeaeae", fontWeight: "200"}}>{`(${project.year})`}</span></h3>
                        <div className="project-card-badges">
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
                        {project.watchUrl && <div className="live-link" onClick={()=>setVideoModalShow(true)}> 
                            <h4>Watch</h4>
                        </div>}
                    </div>
                </div>
            </div>
            <CarouselModal
                show={carouselModalShow} 
                project={project} 
                onHide={()=>setCarouselModalShow(false)}
            />
            {
                project.watchUrl && 
                <VideoModal
                    show={videoModalShow}
                    project={project}
                    onHide={()=>setVideoModalShow(false)}
                />
            }
        </>
        
    )
}