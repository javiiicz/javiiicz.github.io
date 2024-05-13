import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Projects() {
    return (
        <div class="projectsection">
            <h2 class="headingstyle">Projects</h2>
            <CarouselProvider
                naturalSlideWidth={100000}
                naturalSlideHeight={70}
                totalSlides={3}
                infinite={true}
                >
                <Slider className='slider'>
                    <Slide index={0}>
                        <div class="slide-1">
                            <div class="slidercontainer">
                                <div id="SliderTitle1ID" class="slidertitlecontainer">
                                    <h2 class="sliderheadingstyle">Water Reviews</h2>
                                </div>
                                <div id="SliderDesc1ID" class="sliderdesccontainer">
                                    <p class="sliderdescstyle">Water Reviews is an IOS app built with Swift. The app lets users create reviews with sliders, an image, and a description. This review is then posted in the explore page for everyone with the app to see. Apart from SwiftUI, the project uses Firebase libraries such as FirebaseAuth, FirebaseStorage, and FirebaseDatastore for the server side functionality.</p>
                                </div>
                                <div id="Slider1ToolsContainer" class="slidertoolscontainer">
                                    <div class="toolcontainer">
                                    <div class="tooltextstyle">Swift</div>
                                    </div>
                                    <div class="toolcontainer">
                                    <div class="tooltextstyle">FirebaseAuth</div>
                                    </div>
                                    <div class="toolcontainer">
                                    <div class="tooltextstyle">DataStore</div>
                                    </div>
                                </div>
                                <div id="Slider1LinksContainer" class="sliderlinkcontainer">
                                    <a title="WaterReviews Github Link" href="https://github.com/javiiicz/Water-Review-App" class="projectlink w-inline-block"></a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div class="slide-2">
                            <div class="slidercontainer">
                            <div id="SliderTitle2ID" class="slidertitlecontainer">
                                <h2 class="sliderheadingstyle">Sudoku</h2>
                            </div>
                            <div id="SliderDesc2ID" class="sliderdesccontainer">
                                <p class="sliderdescstyle">Sudoku puzzle where one has to place numbers 1 - 9 so that no numbers repeat in any row, column or bow. Implemented the GUI with the Tkinter library. The program can create solvable puzzle in different difficulties, verify if the current configuration has a solution, solve the board utilizing a backtracking algorithm, and export and import custom states.</p>
                            </div>
                            <div id="Slider2ToolsContainerID" class="slidertoolscontainer">
                                <div class="toolcontainer">
                                <div class="tooltextstyle">Python</div>
                                </div>
                                <div class="toolcontainer">
                                <div class="tooltextstyle">Tkinter</div>
                                </div>
                            </div>
                            <div id="Slider2LinksContainerID"  class="sliderlinkcontainer">
                                <a title="Sudoku GitHub Link" href="https://github.com/javiiicz/Sudoku" class="projectlink w-inline-block"></a>
                            </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2}>
                    <div class="slide-3 w-slide">
                        <div class="slidercontainer">
                        <div id="SliderTitle3ID" class="slidertitlecontainer">
                            <h2 class="sliderheadingstyle">Mastermind</h2>
                        </div>
                        <div id="SliderDesc3ID" class="sliderdesccontainer">
                            <p class="sliderdescstyle">Project set in two parts where users can play &quot;Mastermind&quot;, a game where you have to guess a hidden codeword chosen by the computer. Alternatively, one can create a codeword and have the computer try to guess the number.</p>
                        </div>
                        <div id="SliderToolsContainer3ID" class="slidertoolscontainer">
                            <div class="toolcontainer">
                            <div class="tooltextstyle">Java</div>
                            </div>
                        </div>
                        <div id="SliderLinksContainer3ID" class="sliderlinkcontainer">
                            <a title="Mastermind GitHub Link" href="https://github.com/javiiicz/Mastermind" class="projectlink w-inline-block"></a>
                        </div>
                        </div>
                    </div>
                    </Slide>
                </Slider>
                <div class = "buttonContainer">
                    <ButtonBack className="sliderButton">Back</ButtonBack>
                    <ButtonNext className="sliderButton">Next</ButtonNext>
                </div>
                
            </CarouselProvider>
        </ div>
    )
}

export default Projects;