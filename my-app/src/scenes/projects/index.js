import React, { Component } from 'react';
import './project.css';

const Projects = () => (
    <div className='projects'>
        <div className='projCont'>
            <div className='projCont1'>
                <p className='projCont1Text1'>Our Latest Projects.</p>
                <p className='projCont1Text2'>Investigationes demonstraverunt lectores legere me
                 lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur 
                 mutationem consuetudium.</p>
                 <nav className='navv'>
                     <ul>
                        <li>
                            <a>
                                All
                            </a>
                        </li>
                        <li>
                            <a>
                                Web Design
                            </a>
                        </li>
                        <li>
                            <a>
                                Mobile App
                            </a>
                        </li>
                        <li>
                            <a>
                                Illustration
                            </a>
                        </li>
                        <li>
                            <a>
                                Photography
                            </a>
                        </li>
                     </ul>
                 </nav>
            </div>
            <div className='projCont2'>
                <div className='projContBlock'>
                    <div className='projImgAll projContImg1'>
                        <div className='iconsWithHover'>
                            <div className='divForIcons'>
                                <div className='icons1Hover'></div>
                                <div className='icons2Hover'></div>
                            </div>
                        </div>
                    </div>
                    <div className='underProjDiv'>
                        <p className='underProjImg1'>Claritas Etiam Processus</p>
                        <p className='underProjImg2'>Photography, Nature</p>
                    </div>
                </div>
                <div className='projContBlock'>
                    <div className='projImgAll projContImg2'>
                        <div className='iconsWithHover'>
                            <div className='divForIcons'>
                                <div className='icons1Hover'></div>
                                <div className='icons2Hover'></div>
                            </div>
                        </div>
                    </div>
                    <div className='underProjDiv'>
                        <p className='underProjImg1'>Quam Nutamus Farum</p>
                        <p className='underProjImg2'>Graphic Design, Mock-Up</p>
                    </div>
                </div>
                <div className='projContBlock'>
                    <div className='projImgAll projContImg3'>
                        <div className='iconsWithHover'>
                            <div className='divForIcons'>
                                <div className='icons1Hover'></div>
                                <div className='icons2Hover'></div>
                            </div>
                        </div>
                    </div>
                    <div className='underProjDiv'>
                        <p className='underProjImg1'>Usus Legentis Videntur</p>
                        <p className='underProjImg2'>Photography, Holiday</p>
                    </div>
                </div>
                <div className='projContBlock'>
                    <div className='projImgAll projContImg4'>
                        <div className='iconsWithHover'>
                            <div className='divForIcons'>
                                <div className='icons1Hover'></div>
                                <div className='icons2Hover'></div>
                            </div>
                        </div>
                    </div>
                    <div className='underProjDiv'>
                        <p className='underProjImg1'>Claritas Etiam Processus</p>
                        <p className='underProjImg2'>Photography, Nature</p>
                    </div>
                </div>
                <div className='projContBlock'>
                    <div className='projImgAll projContImg5'>
                        <div className='iconsWithHover'>
                            <div className='divForIcons'>
                                <div className='icons1Hover'></div>
                                <div className='icons2Hover'></div>
                            </div>
                        </div>
                    </div>
                    <div className='underProjDiv'>
                        <p className='underProjImg1'>Quam Nutamus Farum</p>
                        <p className='underProjImg2'>Graphic Design, Mock-Up</p>
                    </div>
                </div>
                <div className='projContBlock'>
                    <div className='projImgAll projContImg6'>
                        <div className='iconsWithHover'>
                            <div className='divForIcons'>
                                <div className='icons1Hover'></div>
                                <div className='icons2Hover'></div>
                            </div>
                        </div>
                    </div>
                    <div className='underProjDiv'>
                        <p className='underProjImg1'>Usus Legentis Videntur</p>
                        <p className='underProjImg2'>Photography, Holiday</p>
                    </div>
                </div>
                

            </div>
            <div className='butUnderProj'>load more</div>
        </div>
    </div>
)

export default Projects;