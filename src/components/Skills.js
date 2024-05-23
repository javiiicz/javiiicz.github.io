import React from 'react';
import SkillCard from './SkillCard';

function Skills() {
    return (
        <section id="Skills" className="mt-14 relative">
            <img src="images/RedBlob.svg" loading="lazy" alt="" className="absolute w-[400px] -top-[150px] -left-[200px]" />
            <img src="images/Yellow-Blob.svg" loading="lazy" alt="" className="absolute w-[300px] -right-[100px] top-[100px]" />
            <div className="backdrop-blur bg-gray-100/50 mb-40 px-[10%] py-2 shadow-glass py-6">
                <h2 className="px-0 pb-1 font-bold text-3xl" data-aos="fade-right" data-aos-offset="500"> Skills </h2>
                <p className="text-xl" data-aos="fade-right" data-aos-offset="500"> What I'm familiar working with... </p>
                <div className="flex gap-4 flex-wrap justify-center py-4" data-aos="fade-right" data-aos-offset="500">
                    <SkillCard name="Java" img="images/Java.webp"/>
                    <SkillCard name="Python" img="images/python.webp"/>
                    <SkillCard name="C" img="images/C-Logo.png"/>
                    <SkillCard name="HTML / CSS" img="images/html.png"/>
                    <SkillCard name="Unity" img="images/unity-logo.png"/>
                    <SkillCard name="SQL" img="images/sql.png"/>
                </div>
            </div>
</section>
    )
}

export default Skills;