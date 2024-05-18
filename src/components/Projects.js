import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className="my-40 bg-white shadow-md">
            <h2 className="font-bold py-5 px-[10%] text-3xl">Projects</h2>
            <div className="projectcontainer grid grid-cols-3 p-10 justify-items-center">
                <ProjectCard ></ProjectCard>
                <ProjectCard ></ProjectCard>
                <ProjectCard ></ProjectCard>
            </div>
        </ div>
    )
}

export default Projects;