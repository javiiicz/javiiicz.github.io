import React from "react";
import TiltImage from "./TiltImage";

function Intro() {
    return (
        <section className="my-16 p-10 grid grid-rows-2 sm:grid-cols-intro sm:grid-rows-1 gap-5">
            <div className="flex items-center justify-center" data-aos="fade-right" data-aos-offset="0">
                <div className="flex justify-end items-center">
                <p className="text-center w-11/12 m-0 px-0 text-5xl font-extrabold" >
                    Hello! I'm{" "}
                    <span className="transition-all text-orange-500 hover:drop-shadow-glow duration-500"> Javier</span>, aspiring software developer.
                </p>
                </div>
            </div>
                <TiltImage/>
            </section>

    )
}

export default Intro;