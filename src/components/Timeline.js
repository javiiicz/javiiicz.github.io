import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <section id="Experience">
        <div className="experiencesection">
            <img src="images/GreenBlob.svg" loading="lazy" alt="" className="blob green" />
            <img src="images/RedBlob.svg" loading="lazy" alt="" className="blob red" />
            <img src="images/DarkBlue-Blob.svg" loading="lazy" alt="" className="blob darkblue" />
            <img src="images/TealBlob.svg" loading="lazy" alt="" className="blob teal" />
            
            <div className="glassycontainer mobiletimeline">
                <h2 className="headingstyle nopadding" >
                    Experience
                </h2>
                <div className="timelinecontainer" >
                    <div className="timelineelecontainer" >
                        <h3 className="timelineheading">Schoolhouse.world</h3>
                        <div className="timelineposition">Math Tutor</div>
                        <div className="timelinetime">Sep 2022 - Nov 2022</div>
                        <p className="timelinedesc">
                            Led a 4-week long SAT Math Bootcamp with 12 students with tailored
                            lessons that contained explanations, examples, and exercises.
                        </p>
                    </div>
                    <div
                    id="w-node-e7d2f4d2-ead0-b555-88d6-e434b4c1e1df-05a70ca8"
                    className="timelineelecontainer"
                    >
                        <h3 className="timelineheading">University of Miami</h3>
                        <div className="timelineposition">
                            B.S Computer Science &amp; Mathematics
                        </div>
                        <div className="timelinetime">Aug 2023 - Present</div>
                        <p className="timelinedesc">
                            Currently pursuing a double major with concentration in Data Science
                            and Statistics, respectively.
                        </p>
                    </div>
                    <div
                    id="w-node-_04d400eb-7b80-72a9-3ac6-c515734ee7b3-05a70ca8"
                    className="timelineelecontainer"
                    >
                        <h3 className="timelineheading">
                            Kappa Theta Pi - Professional Fraternity
                        </h3>
                        <div className="timelineposition">
                            Director of Technical Operations
                        </div>
                        <div className="timelinetime">April 2024 - Present</div>
                        <p className="timelinedesc">
                            Updates and maintains communication channels, including the website,
                            with the most recent information regarding members and events.{" "}
                        </p>
                    </div>
                    <div
                    id="w-node-_48e6cfc0-4425-be2e-5097-134a6713db94-05a70ca8"
                    className="linecontainer"
                    >
                    <div
                        id="w-node-_618f4ae0-ff54-37fd-5c59-b24bb5c4af7b-05a70ca8"
                        className="line"
                    />
                    <img
                        src="images/SHWorld-Logo.jpeg"
                        loading="lazy"
                        data-w-id="556c48ec-2bf3-9482-8f41-059832c0edf4"
                        id="w-node-_556c48ec-2bf3-9482-8f41-059832c0edf4-05a70ca8"
                        alt="Schoolhouse.world logo
            "
                        className="timelineimage"
                    />
                    <img
                        src="images/UMLogo.png"
                        loading="lazy"
                        data-w-id="29708f4d-f6fb-8fdc-e27c-e9b1cc1e9340"
                        sizes="50px"
                        alt="UMiami logo"
                        srcSet="images/UMLogo.png 500w, images/UMLogo.png 512w"
                        className="timelineimage"
                    />
                    <img
                        src="images/ktp_logo.jpeg"
                        loading="lazy"
                        data-w-id="1fc4a71a-de24-8ada-5dbe-4ea3d0487538"
                        alt="Kappa Theta Pi Professional Fraternity Logo
            "
                        className="timelineimage"
                    />
                    </div>
                </div>
            </div>
        </div>
        </ section>
    )
}

export default Timeline;