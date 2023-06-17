import React from "react";
import projects from "../projects";
import ProjectCard from "../components/ProjectCard";
import techs from "../techs";

export default function Projects() {
    const projectTechs = techs.filter(tech => tech.isProjectTech===true);
    const [filterList, setFilterList] = React.useState([]);
    const [filteredProjects, setFilteredProjects] = React.useState(projects)
    const filterButton = React.useRef(document.querySelector(".dropdown-filter"));
    
    React.useEffect(() => {
        setFilteredProjects(
            filterList.length 
                ? projects.filter(
                    project => filterList.every(
                        filter => project.techStack.includes(filter)
                    )
                )
                : projects
        )
    }, [filterList])

    React.useEffect(()=>{
        function handleClick(event) {
            if(![...filterDescendants].includes(event.target)) {
                filterButton.current.classList.remove("open");
            }
        }
        const body = document.querySelector("body");
        const filterDescendants = document.querySelector(".dropdown-filter").querySelectorAll("*");
        body.addEventListener("click", handleClick);
    })

    function refreshFilterList () {
        const selectedItems = document.querySelectorAll(".dropdown-filter-item.selected");
        setFilterList([...selectedItems].map(item=>item.dataset.name));
    }

    function toggleItemChecked(index) {
        const filterItems = document.querySelectorAll(".dropdown-filter-item");
        filterItems[index].classList.toggle("selected");
        refreshFilterList();
    };
    
    function toggleFilterItems() {
        filterButton.current.classList.toggle("open");
    }

    function clearFilter() {
        filterButton.current.classList.remove("open");
        const filterItems = document.querySelectorAll(".dropdown-filter-item");
        filterItems.forEach(item=>item.classList.remove("selected"));
        setFilterList([]);
    }
    
    return(
        <div id="portfolio">
            <h3>My Projects</h3>
            <div className="filter-container">
                <div className="dropdown-filter" ref={filterButton}>
                    <div className="filter-elements" onClick={toggleFilterItems}>
                        <span className="dropdown-filter-btn"  >Filter by tech</span>
                        <span className="dropdown-filter-arrow"><i className="bi bi-chevron-down"></i></span>
                    </div>
                    <ul className="dropdown-filter-items">
                        {projectTechs.map((tech, i) => {
                            return(
                                <li 
                                    key={i} 
                                    data-name={tech.name} 
                                    className="dropdown-filter-item" 
                                    onClick={()=>toggleItemChecked(i)}
                                >
                                    <span className="item-checkbox">
                                        <i className="bi bi-check"></i>
                                    </span>
                                    <span className="item-text">{tech.name}</span>
                                </li>
                            )
                        })}                        
                    </ul>
                </div>
                
                <p className="clear-filter-btn" onClick={clearFilter}>clear filter</p>
            </div>
            {filteredProjects.map(project => <ProjectCard key={project.id} project={project}/>)}
        </div>
    )
}