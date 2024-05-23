import React from "react";

function Intro() {
    return (
        <section className="p-10 grid grid-rows-2 sm:grid-cols-intro sm:grid-rows-1 gap-5">
            <div className="flex items-center justify-center">
                <div className="flex justify-end items-center">
                <p className="text-center w-11/12 m-0 px-0 text-5xl font-extrabold" >
                    Hello! I'm{" "}
                    <span className="transition-all text-orange-500 hover:drop-shadow-glow"> Javier</span>, aspiring software developer.
                </p>
                </div>
            </div>
            <div className="flex items-center justify-center relative">
                <div className="grid grid-cols-1 justify-center items-center justify-items-center w-full" >
                <img
                    src="images/Organic-SVG-Blob.svg"
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="w-[450px] rotate-45 translate-x-3"
                />
                <img
                    src= "images/ducky.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 97vw, 43vw"
                    srcSet="images/ducky-p-500.png 500w, images/ducky.png 700w"
                    alt="A rubber ducky."
                    className="w-ducky absolute"
                />
                </div>
            </div>
            </section>

    )
}

export default Intro;