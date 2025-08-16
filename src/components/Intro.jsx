import React from "react";
import TiltImage from "./TiltImage";
import Particles from './Particles';
import AnimatedContent from './AnimatedContent'
import FadeContent from './FadeContent'

function Intro() {
    return (
        <section className="relative">


            <FadeContent blur={true} duration={10000} easing="ease-out" initialOpacity={0.8}>
                <div style={{ width: '100%', height: '900px', position: 'absolute', filter: 'blur(15px)'}}>
                    <Particles
                        particleColors={['#F1C21C', '#FA4E56']}
                        particleCount={150}
                        particleSpread={4}
                        speed={0.3}
                        particleBaseSize={200}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
            </FadeContent>

            <div className="h-full mx-[10%] py-[20vh] grid grid-rows-2 sm:grid-cols-intro sm:grid-rows-1 gap-5">
                <AnimatedContent distance={300} direction="horizontal" delay={1500} reverse={true} config={{ tension: 80, friction: 20 }} initialOpacity={0.0} animateOpacity scale={0.9} threshold={0.2}>
                    <div className="h-full flex items-center justify-center">
                        <p className="text-center w-11/12 m-0 px-32 text-6xl font-extrabold cursor-default" >
                            Hello! I'm
                            <span className="transition-all text-orange-500 hover:drop-shadow-glow duration-500"> Javier</span>, aspiring software engineer.
                        </p>
                    </div>
                </AnimatedContent>

                <AnimatedContent distance={300} direction="horizontal" delay={500} reverse={false} config={{ tension: 80, friction: 20 }} initialOpacity={0.0} animateOpacity scale={0.9} threshold={0.2}>
                    <TiltImage />
                </AnimatedContent>
                
            </div>
        </section>

    )
}

export default Intro;