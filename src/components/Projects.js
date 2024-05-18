import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className="py-10 my-40 px-[10%] bg-gradient-to-r from-red-400/95 to-yellow-300/95 shadow-md">
            <h2 className="font-bold py-5  text-3xl">Projects</h2>
            <p className="text-xl"> These projects serve as a way to practice my abilities, apply what is learned in class, and create impactful results.</p>
            <div className="w-full flex flex-rows flex-wrap p-10 content-center justify-center gap-4">
                <ProjectCard 
                    name="Water Reviews" 
                    desc="Water Reviews is an IOS app built with Swift. The app lets users create reviews with sliders, an image, and a description. This review is then posted in the explore page for everyone with the app to see. Apart from SwiftUI, the project uses Firebase libraries such as FirebaseAuth, FirebaseStorage, and FirebaseDatastore for the server side functionality." 
                    tools={["Swift","FirebaseAuth","Datastore"]}>
                </ProjectCard>
                <ProjectCard 
                    name="Sudoku"
                    desc="Puzzle where one has to place numbers 1 - 9 so that no numbers repeat in any row, column or bow. Implemented the GUI with the Tkinter library. The program can create solvable puzzle in different difficulties, verify if the current configuration has a solution, solve the board utilizing a backtracking algorithm, and export and import custom states." 
                    tools={["Python", "Tkinter"]}>
                </ProjectCard>
                <ProjectCard 
                    name="Mastermind"
                    desc="Codeword guessing gamse set in two parts where you have to guess a hidden codeword chosen by the computer. Alternatively, one can create a codeword and have the computer try to guess the number." 
                    tools={["Java"]}>
                </ProjectCard>
            </div>
        </ div>
    )
}

export default Projects;