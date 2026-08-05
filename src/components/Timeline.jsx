import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import UMUrl from "../images/UMLogo.png"
import KTPUrl from "../images/ktp_logo.jpeg"
import BonsaiUrl from "../images/Bonsai_Icon.png"
import IDSCUrl from "../images/idsc.png"
import MetaUrl from "../images/meta_icon.png"
import GoogleUrl from "../images/google.png"
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
                                date='September 2024 - December 2025'

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
                                date='January 2025 - January 2026'
                            >
                                <h3 className="my-0 text-lg font-bold">
                                    Virtual Experiences Simulation Lab
                                </h3>
                                <div className="text-sm italic font-semibold text-gray-700">
                                    XR Developer • Coral Gables, FL
                                </div>
                                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 font-normal">
                                    <li>Developed an immersive virtual reality experience in Unity and C# to study social anxiety, gathering behavioral telemetry to support ongoing psychological research.</li>
                                    <li>Improved product usability and research alignment by leading iterative user testing, accelerating development time and enhancing subject engagement.</li>
                                </ul>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<MetaIcon />}
                                iconClassName='overflow-hidden bg-gray-50 border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='June 2025 - August 2025'
                            >
                                <h3 className="my-0 text-lg font-bold">
                                    Meta
                                </h3>
                                <div className="text-sm italic font-semibold text-gray-700">
                                    Software Engineer Intern • Menlo Park, CA
                                </div>
                                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 font-normal">
                                    <li>Shipped a full-stack event-discovery platform (React, Express, Prisma, PostgreSQL) end-to-end, completing all 10 MVP milestones on schedule and delivering 2 stretch features ahead of deadline.</li>
                                    <li>Designed and implemented a multi-factor recommendation engine blending user history, similar-user behavior, and event proximity, and a multi-objective scheduling algorithm that optimizes routes for commute time.</li>
                                    <li>Cut load times by 200ms by integrating React Query caching into the scheduling and recommendation features.</li>
                                </ul>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<GoogleIcon />}
                                iconClassName='overflow-hidden bg-gray-50 border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='May 2026 - July 2026'
                            >
                                <h3 className="my-0 text-lg font-bold">
                                    Google (YouTube)
                                </h3>
                                <div className="text-sm italic font-semibold text-gray-700">
                                    Software Engineer Intern • San Bruno, CA
                                </div>
                                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 font-normal">
                                    <li>Drove end-to-end design and C++ implementation of an automated static validation gate in the CI/CD presubmit pipeline, catching configuration errors pre-commit and saving an estimated 15 hours/week.</li>
                                    <li>Authored technical architecture design specifications for security permission validation, leading development and deploying IAM checks across 34+ production environments and 380+ use cases.</li>
                                    <li>Built comprehensive C++ unit and integration test suites, ensuring 95% test coverage across the codebase.</li>
                                </ul>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<UMIcon />}
                                iconClassName='overflow-hidden bg-gray-50 border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='January 2026 - May 2026'
                            >
                                <h3 className="my-0 text-lg font-bold">
                                    University of Miami, Department of Computer Science
                                </h3>
                                <div className="text-sm italic font-semibold text-gray-700">
                                    Teaching Assistant – Data Structures &amp; Algorithms
                                </div>
                                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 font-normal">
                                    <li>Conducted weekly office hours to guide students in learning core concepts in data structures.</li>
                                    <li>Evaluated weekly homework assignments covering foundational DSA topics, providing detailed feedback on theoretical correctness and problem-solving logic.</li>
                                </ul>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                icon={<UMIcon />}
                                iconClassName='overflow-hidden bg-gray-50 border-gray-400'
                                iconStyle={{ boxShadow: '#111827 0px 0px 0px 4px' }}
                                date='August 2024 - Present'
                            >
                                <h3 className="my-0 text-lg font-bold">
                                    Housing and Residential Life, University of Miami
                                </h3>
                                <div className="text-sm italic font-semibold text-gray-700">
                                    Lead First Year Fellow (May 2026) / First Year Fellow
                                </div>
                                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 font-normal">
                                    <li>Serve as the primary student liaison between professional housing staff and student staff, facilitating weekly meetings and co-directing program planning.</li>
                                    <li>Mentor 50+ first-year students in their academic and personal transition to university life, increasing student engagement through campus events.</li>
                                </ul>
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

function GoogleIcon() {
    return (
        <div>
            <img src={GoogleUrl} loading="lazy" alt="Meta Logo" />
        </div>
    )
}

export default Timeline;