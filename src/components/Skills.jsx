import React from 'react';
import SkillCard from './SkillCard';
import javaUrl from "../images/Java.webp";
import pythonUrl from "../images/python.webp";
import CUrl from "../images/C-Logo.png";
import JSUrl from "../images/JS.png";
import UnityUrl from "../images/unity-logo.png";
import SQLUrl from "../images/sql.png";
import redBlobUrl from "../images/RedBlob.svg";
import yellowBlobUrl from "../images/Yellow-Blob.svg"

function Skills() {
    return (
        <section id="Skills" className="mt-32 relative">
            <img src={redBlobUrl} loading="lazy" alt="" className="absolute w-[400px] -top-[150px] -left-[200px]" />
            <img src={yellowBlobUrl} loading="lazy" alt="" className="absolute w-[300px] -right-[100px] top-[100px]" />
            <div className="backdrop-blur bg-gray-100/50 mb-40 px-[10%] shadow-glass py-6">
                <h2 className="px-0 pb-1 font-bold text-3xl drop-shadow" data-aos="fade-right"> Skills </h2>
                <p className="text-xl" data-aos="fade-right"> What I'm familiar working with... </p>
                <div className="flex gap-4 flex-wrap justify-center py-4" data-aos="fade-right">
                    <SkillCard name="Java" img={javaUrl}/>
                    <SkillCard name="Python" img={pythonUrl}/>
                    <SkillCard name="C" img={CUrl}/>
                    <SkillCard name="JavaScript" img={JSUrl}/>
                    <SkillCard name="Unity" img={UnityUrl}/>
                    <SkillCard name="SQL" img={SQLUrl}/>
                </div>
            </div>
</section>
    )
}

export default Skills;