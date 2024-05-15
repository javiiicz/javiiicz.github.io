import React from "react";

function Intro() {
    return (
        <section className="introsection">
            <div id="Column1ID" className="column">
                <div className="introtextcontainer">
                <p className="introtextstyle" >
                    Hello! I'm{" "}
                    <span className="namestyle"> Javier </span>
                    , aspiring software developer.
                </p>
                </div>
            </div>
            <div id="Column2ID" className="column">
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