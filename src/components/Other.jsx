import { useState } from "react";
import SmallProject from './SmallProject';

const OtherExperiments = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-white transition-all">
            <h3 
                className="text-2xl mb-2 cursor-pointer select-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                Other Experiments <span className="text-sm">{isOpen ? "▲" : "▼"}</span>
            </h3>
            <div className={`transition-all duration-800 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="px-8 font-medium text-base list-disc">
                    <li>
                        <SmallProject 
                            name="Connections" 
                            desc="Front end project about creating a clone for the New York Times Connections." 
                            link="https://javiiicz.github.io/cim343-proj1/"
                        />
                    </li>
                    <li>
                        <SmallProject 
                            name="Interactive Website" 
                            desc="Remake of a website to work with canvas and p5js." 
                            link="https://javiiicz.github.io/cim343-proj2/"
                        />
                    </li>
                    <li>
                        <SmallProject 
                            name="Testify, UI/UX Project" 
                            desc="App created to showcase UI and UX design skills." 
                            link="https://www.canva.com/design/DAGY0dFb5n0/dNAvwxj5HuZ_PRlw83jurA/view?utm_content=DAGY0dFb5n0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h66b267e7f9"
                        />
                    </li>
                    <li>
                        <SmallProject 
                            name="Mastermind"
                            desc="Codeword guessing gamse set in two parts where you have to guess a hidden codeword chosen by the computer."
                            link="https://github.com/javiiicz/Mastermind"
                        />
                    </li>
                    <li>
                        <SmallProject 
                            name="Zombie Escape"
                            desc="A Unity game made to showcase abilities obtained in Creative Coding course."
                            link="https://drive.google.com/file/d/19_SyV-KrBERhmLY_6sR3j62GYmOVK_kw/view?usp=sharing"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherExperiments;
