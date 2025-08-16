import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import UMUrl from "../images/UMLogo.png"
import KTPUrl from "../images/ktp_logo.jpeg"
import BonsaiUrl from "../images/Bonsai_Icon.png"
import IDSCUrl from "../images/idsc.png"
import MetaUrl from "../images/meta_icon.png"
import greenBlobUrl from "../images/GreenBlob.svg"
import redBlobUrl from "../images/RedBlob.svg"
import blueBlobUrl from "../images/DarkBlue-Blob.svg"
import tealBlobUrl from "../images/TealBlob.svg"

function Timeline() {
    return (
        <section id="Experience">
            <div className="relative">
                <img src={greenBlobUrl} loading="lazy" alt="" className="absolute w-[400px] top-[300px] right-[100px]" />
                <img src={redBlobUrl} loading="lazy" alt="" className="absolute w-[300px] -top-[100px] left-[0px]" />
                <img src={blueBlobUrl} loading="lazy" alt="" className="absolute w-[400px] -bottom-[100px] -left-[100px]" />
                <img src={tealBlobUrl} loading="lazy" alt="" className="absolute w-[500px] top-[50px] -right-[200px]" />


                <div className="noise-overlay backdrop-blur bg-gray-100/50 px-[10%] shadow-glass py-6">
                    <h2 className="px-0 pb-1 font-bold text-3xl drop-shadow" data-aos="fade-right"> Experience </h2>
                    <div className="p-5" >
                        <VerticalTimeline
                            lineColor={'#111827'}>

                            <VerticalTimelineElement
                                icon={<UMIcon />}
                                iconClassName='overflow-hidden bg-gray-50 object-cover'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='Aug 2023 - Present'
                            >
                                <h3 className="my-0 text-lg">University of Miami</h3>
                                <div className="text-sm italic">
                                    B.S Computer Science &amp; Mathematics
                                </div>
                                <p className="mt-2">
                                    I'm currently pursuing a double major with concentration in Data Science
                                    and Statistics, respectively.
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<KTPIcon />}
                                iconClassName='overflow-hidden border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='April 2024 - August 2025'

                            >
                                <h3 className="my-0 text-lg">
                                    Kappa Theta Pi - Professional Fraternity
                                </h3>
                                <div className="text-sm italic">
                                    Director of Technical Operations
                                </div>
                                <p className="mt-2">
                                    I updated and maintained communication channels, including the website,
                                    with the most recent information regarding members and events.
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<BonsaiIcon />}
                                iconClassName='overflow-hidden bg-gray-50 border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='September 2024 - Present'

                            >
                                <h3 className="my-0 text-lg">
                                    Bonsai Applied Computations Group
                                </h3>
                                <div className="text-sm italic">
                                    Research Analyst
                                </div>
                                <p className="mt-2">
                                    I develop and deploy computer science applications to support faculty research, boosting interdisciplinary research
                                    efforts and enhancing academic output across various fields.
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<IDSCIcon />}
                                iconClassName='overflow-hidden bg-gray-50 border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='January 2025 - Present'

                            >
                                <h3 className="my-0 text-lg">
                                    University of Miami Frost Institute for Data Science & Computing
                                </h3>
                                <div className="text-sm italic">
                                    XR Developer
                                </div>
                                <p className="mt-2">
                                    I am an XR developer at the University of Miami, where I work on cutting-edge immersive media projects with students and faculty.
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<MetaIcon />}
                                iconClassName='overflow-hidden bg-gray-50 border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='June 2025 - August 2025'

                            >
                                <h3 className="my-0 text-lg">
                                    Meta
                                </h3>
                                <div className="text-sm italic">
                                    Software Engineer Intern
                                </div>
                                <p className="mt-2">
                                    I developed a full-stack application using React, Node, Postgres, and other APIs with the help of a manager and peers.
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </ section>
    )
}

function IDSCIcon() {
    return (
        <div>
            <img src={IDSCUrl} loading="lazy" alt="University of Miami Frost Institute for Data Science & Computing logo" />
        </div>
    )
}

function UMIcon() {
    return (
        <div>
            <img src={UMUrl} loading="lazy" alt="UMiami logo" />
        </div>
    )
}

function KTPIcon() {
    return (
        <div>
            <img src={KTPUrl} loading="lazy" alt="Kappa Theta Pi Professional Fraternity Logo" />
        </div>
    )
}

function BonsaiIcon() {
    return (
        <div>
            <img src={BonsaiUrl} loading="lazy" alt="Bonsai Applied Computation Group Logo" />
        </div>
    )
}

function MetaIcon() {
    return (
        <div>
            <img src={MetaUrl} loading="lazy" alt="Meta Logo" />
        </div>
    )
}

export default Timeline;