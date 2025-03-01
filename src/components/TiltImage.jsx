import Tilt from 'react-parallax-tilt';
import "./parallax.css"
import duckyUrl from '../images/ducky.png'

function TiltImage() {
    return (
        <div className="grid grid-cols-1 justify-center items-center justify-items-center w-full">
            <Tilt className="parallax-effect relative"
                  perspective={500}
                  tiltReverse={true}
                  transitionSpeed={30000}
            >
                <svg className="absolute blobbg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <path fill="#F1C21B"
                          d="M39.1,-55.4C49.7,-46.1,56.6,-33.4,61.6,-19.6C66.6,-5.9,69.6,8.8,66.6,22.8C63.6,36.7,54.6,49.7,42.5,62.3C30.4,74.9,15.2,87,-1.5,89C-18.2,91.1,-36.4,83.1,-49.7,71C-63,58.8,-71.4,42.4,-72.8,26.4C-74.1,10.5,-68.5,-5,-63.2,-20.3C-57.9,-35.6,-52.8,-50.7,-42.4,-60C-31.9,-69.4,-15.9,-73,-0.8,-71.8C14.2,-70.7,28.5,-64.7,39.1,-55.4Z"
                          transform="translate(100 100)"/>
                </svg>

                <img
                    src= {duckyUrl}
                    loading="lazy"
                    alt="A rubber ducky."
                    className="w-ducky parallax-child"
                />
                
                <svg className="absolute blobfg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <path fill="#ECAB13" d="M47.4,-21.1C58.3,-8.5,61.8,14.6,52.7,26.6C43.6,38.6,21.8,39.4,2.6,38C-16.7,36.5,-33.4,32.7,-39.6,22.4C-45.8,12.1,-41.5,-4.7,-33.2,-15.8C-24.8,-26.9,-12.4,-32.3,2.9,-34C18.2,-35.7,36.5,-33.6,47.4,-21.1Z" transform="translate(100 100)"/>
                </svg>
            </Tilt>
        </div>
    )
}

export default TiltImage