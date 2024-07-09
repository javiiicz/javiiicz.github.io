import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SHUrl from "../images/SHWorld-Logo.jpeg"
import UMUrl from "../images/UMLogo.png"
import KTPUrl from "../images/ktp_logo.jpeg"
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
            <img src={SHUrl} loading="lazy" alt="Schoolhouse.world logo" />
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

export default Timeline;