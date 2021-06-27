import React from 'react';
import About from './About';
import './Project.scss';
import ProjectData from './ProjectData';
import ProjectInfo from './ProjectInfo';

const Project = (props) => {
    const { openPopup } = props;
    return(
        <div className="Project">
            <ProjectInfo openPopup={openPopup} />
            <ProjectData />
            <About openPopup={props.openPopup}/>
        </div>
    )
}
export default Project;