import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <section id="Experience">
        <div className="relative">
            <img src="images/GreenBlob.svg" loading="lazy" alt="" className="absolute w-[400px] top-[300px] right-[100px]" />
            <img src="images/RedBlob.svg" loading="lazy" alt="" className="absolute w-[300px] -top-[100px] left-[0px]" />
            <img src="images/DarkBlue-Blob.svg" loading="lazy" alt="" className="absolute w-[400px] -bottom-[100px] -left-[100px]" />
            <img src="images/TealBlob.svg" loading="lazy" alt="" className="absolute w-[500px] top-[50px] -right-[200px]" />


            <div className="backdrop-blur bg-gray-100/50 px-[10%] py-2 shadow-glass py-6">
                <h2 className="px-0 pb-1 font-bold text-3xl" data-aos="fade-right"> Experience </h2>
                <div className="p-5" >
                <VerticalTimeline
                    lineColor={'#111827'}>
                    <VerticalTimelineElement
                        icon={ <SHIcon /> }
                        iconClassName='overflow-hidden '
                        iconStyle={{ boxShadow: '#111827 0px 0px 1px 4px' }}
                        date='Sep 2022 - Nov 2022'
                    >
                        <h3 className="my-0 text-lg">Schoolhouse.world</h3>
                        <div className="text-sm italic">Math Tutor</div>
                        <p className="mt-2">
                            Led a 4-week long SAT Math Bootcamp with 12 students with tailored
                            lessons that contained explanations, examples, and exercises.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        icon={ <UMIcon /> }
                        iconClassName='overflow-hidden bg-gray-50 object-cover'
                        iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                        date='Aug 2023 - Present'
                    >
                        <h3 className="my-0 text-lg">University of Miami</h3>
                        <div className="text-sm italic">
                            B.S Computer Science &amp; Mathematics
                        </div>
                        <p className="mt-2">
                            Currently pursuing a double major with concentration in Data Science
                            and Statistics, respectively.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        icon={ <KTPIcon /> }
                        iconClassName='overflow-hidden border-gray-400'
                        iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                        date='April 2024 - Present'

                    >
                        <h3 className="my-0 text-lg">
                            Kappa Theta Pi - Professional Fraternity
                        </h3>
                        <div className="text-sm italic">
                            Director of Technical Operations
                        </div>
                        <p className="mt-2">
                            Updates and maintains communication channels, including the website,
                            with the most recent information regarding members and events.{" "}
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                </div>
            </div>
        </div>
        </ section>
    )
}

function SHIcon() {
    return (
        <div>
            <img src="images/SHWorld-Logo.jpeg" loading="lazy" alt="Schoolhouse.world logo" />
        </div>
    )
}

function UMIcon() {
    return (
        <div>
            <img src="images/UMLogo.png" loading="lazy" alt="UMiami logo" />
        </div>
    )
}

function KTPIcon() {
    return (
        <div>
            <img src="images/ktp_logo.jpeg" loading="lazy" alt="Kappa Theta Pi Professional Fraternity Logo" />
        </div>
    )
}

export default Timeline;