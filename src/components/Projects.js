import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className="projectsection bg-white">
            <h2 className="headingstyle py-5">Projects</h2>
            <div className="projectcontainer shadow-md grid grid-cols-3 p-10 justify-items-center">
                <ProjectCard ></ProjectCard>
                <ProjectCard ></ProjectCard>
                <ProjectCard ></ProjectCard>
            </div>
        </ div>
    )
}

export default Projects;