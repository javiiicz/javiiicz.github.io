import React from "react";

function Intro() {
    return (
        <section className="p-10 grid grid-cols-intro gap-5 grid-flow-col">
            <div className="flex items-center justify-center">
                <div className="flex justify-end items-center">
                <p className="text-center w-11/12 m-0 px-0 text-5xl font-extrabold" >
                    Hello! I'm{" "}
                    <span className="transition-all text-orange-500 hover:drop-shadow-glow"> Javier</span>, aspiring software developer.
                </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="introimgcontainer" >
                <img
                    src="images/Organic-SVG-Blob.svg"
                    loading="lazy"
                    width="Auto"
                    alt=""
                    className="imgbg"
                />
                <img
                    src= "images/ducky.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 97vw, 43vw"
                    srcSet="images/ducky-p-500.png 500w, images/ducky.png 700w"
                    alt="A rubber ducky."
                    className="imgfg"
                />
                <img
                    src="images/Organic-Shape.svg"
                    loading="lazy"
                    alt=""
                    className="imagemg"
                />
                </div>
            </div>
            </section>

    )
}

export default Intro;