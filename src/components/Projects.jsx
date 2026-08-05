import React from 'react';
import ProjectCard from './ProjectCard';
import WRUrl from "../images/Water-Review-Img.jpg";
import SudokuUrl from "../images/Sudoku-Img.png";
import QRUrl from "../images/QR_Code.png"
import MinesweeperUrl from "../images/Minesweeper_Thumbnail.png"
import DDUrl from "../images/DD_demo.png"
import GOLUrl from "../images/Conway.png"
import ZombUrl from "../images/Zombie.png"
import ResearchUrl from "../images/Research_Classifier.jpg";
import OtherExperiments from './Other';

function Projects() {
    return (
        <section id="Projects">
            <div className="py-10 mb-40 px-16 bg-gradient-to-r from-red-400/95 to-yellow-300/95 shadow-md">
                <h2 className="font-bold py-5 text-3xl drop-shadow" data-aos="fade-right">Projects</h2>
                <p className="text-xl" data-aos="fade-right"> These projects serve as a way to practice my abilities, apply what is learned in class, and create impactful results.</p>
                <div className="w-full flex flex-rows flex-wrap py-10 content-center justify-center gap-4">
                    <ProjectCard
                        name="Transferability of Pre-Trained Image Classifiers (Research)"
                        desc="Researched a training-free topological analysis mechanism to evaluate the transferability of pre-trained image classifiers across downstream computer vision tasks. Evaluated 9 computer vision architectures on ImageNet and CIFAR-100 datasets using class-mean clustering and cycle edge accumulation, establishing a statistically significant positive correlation with fine-tuned accuracy. Presented findings at the UM RCIF Forum."
                        tools={["Python", "PyTorch", "Torchvision"]}
                        img={ResearchUrl}>
                    </ProjectCard>
                    <ProjectCard
                        name="DrowsyDriver (3rd Place, 36-hr Hackathon)"
                        desc="Built a real-time driver fatigue monitoring system using OpenCV for video capture and dlib-based eye/mouth tracking to detect drowsiness and trigger alerts, placing 3rd out of 200+ teams. Architected a Flask API to asynchronously stream and process video frames in real time with 100ms detection latency and Azure Speech warnings."
                        tools={["Python", "Flask", "OpenCV", "dlib", "Azure Speech"]}
                        img={DDUrl}
                        link="https://github.com/Alans44/DrowsyDriver"
                        website="https://devpost.com/software/drowsydriver-e31tn6">
                    </ProjectCard>
                    <ProjectCard
                        name="Water Reviews"
                        desc="Water Reviews is an IOS app built with Swift. The app lets users create reviews with sliders, an image, and a description. This review is then posted in the explore page for everyone with the app to see. Apart from SwiftUI, the project uses Firebase libraries such as FirebaseAuth, FirebaseStorage, and FirebaseDatastore for the server side functionality."
                        tools={["Swift", "FirebaseAuth", "Datastore"]}
                        img={WRUrl}
                        link="https://github.com/javiiicz/Water-Review-App">
                    </ProjectCard>
                    <ProjectCard
                        name="Sudoku"
                        desc="Puzzle where one has to place numbers 1 - 9 so that no numbers repeat in any row, column or bow. Implemented the GUI with the Tkinter library. The program can create solvable puzzle in different difficulties, verify if the current configuration has a solution, solve the board utilizing a backtracking algorithm, and export and import custom states."
                        tools={["Python", "Tkinter"]}
                        img={SudokuUrl}
                        link="https://github.com/javiiicz/Sudoku">
                    </ProjectCard>
                    <ProjectCard
                        name="QR Code Generator"
                        desc="QR code generator that allows up to 2.9k bytes. The generator automatically detects the optimal mode of encoding and what is the best size to use. It also has multiple levels of error correction which it calculates utilizing the Reed-Solomon error correction method."
                        tools={["Python", "PIL", "JavaScript"]}
                        img={QRUrl}
                        link="https://github.com/javiiicz/QRCodeGen"
                        website="https://javiiicz.github.io/QRCodeGen/">
                    </ProjectCard>
                    <ProjectCard
                        name="Minesweeper"
                        desc="The classic Microsoft minesweeper game made with JavaScript. Click cells or flag them to discover the location of all the mines. Contains three difficulties a scoreboard system where users can post results."
                        tools={["JavaScript", "Firebase"]}
                        img={MinesweeperUrl}
                        link="https://github.com/javiiicz/Minesweeper"
                        website="https://javiiicz.github.io/Minesweeper/">
                    </ProjectCard>
                    <ProjectCard
                        name="Game of Life"
                        desc="A C++ implementation of Conway's Game of Life, featuring cellular automaton simulations with interactive controls and customizable configurations."
                        tools={["C++", "SFML"]}
                        img={GOLUrl}
                        link="https://github.com/javiiicz/Game_of_Life">
                    </ProjectCard>
                </div>

                <OtherExperiments/>
            </ div>
        </section>
    )
}

export default Projects;