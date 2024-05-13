import React from 'react';
import SkillCard from './SkillCard';

function Skills() {
    return (
        <section id="SkillSectionID" className="skillsection">
            <img src="images/RedBlob.svg" loading="lazy" alt="" className="blob red" />
            <img src="images/Yellow-Blob.svg" loading="lazy" alt="" className="blob yellow" />
            <div className="glassycontainer">
                <h2 className="headingstyle skills" > Skills </h2>
                <p className="paragraph" > What I'm familiar working with... </p>
                <div className="cardcontainer">
                    <SkillCard name="Java" img="images/Java.webp"/>
                    <SkillCard name="Python" img="images/Python.webp"/>
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