import React from 'react';
import About from './About';
import './Project.scss';
import ProjectData from './ProjectData';
import ProjectInfo from './ProjectInfo';

const Project = (props) => {
    return(
        <div className="Project">
            <ProjectInfo />
            <ProjectData />
            <About openPopup={props.openPopup}/>
        </div>
    )
}
export default Project;