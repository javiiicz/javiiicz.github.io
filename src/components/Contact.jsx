import Tilt from 'react-parallax-tilt';

function Contact() {
    return (
        <div className="flex flex-col justify-center items-center my-32">
            <p className="text-center text-xl font-semibold py-8" data-aos="zoom-in"> Do you have more questions? </p>
            <div data-aos="zoom-in" data-aos-delay="1000">
                <Tilt
                    tiltReverse={true}
                    perspective={10000}
                    transitionSpeed={10000}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    reset={true}
                    className='parallax-effect relative bg-rose-600/60 w-52 h-[5.5rem] border-[8px] border-rose-600/5 rounded-[24px] shadow'
                    scale={1.05}
                >
                    <a href="mailto:jcarrillo@miami.edu" className="absolute text-center w-full h-full text-gray-50 font-bold text-2xl bg-red-500/90 hover:bg-rose-500/80 px-8 py-5 rounded-2xl transition-all drop-shadow-xl button-parallax"> Let's Talk </a>
                </Tilt>

            </div>
        </div>
    )
}

export default Contact;