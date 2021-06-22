import React from 'react';
import './ProjectData.scss';

const ProjectData = () => {
    return(
        <div className="ProjectData">
            <div className="data-holder">
                <div className="data-column line">
                    <div className="amount">$89,914</div>
                    <div className="total">of $100,000 backed</div>
                    <div className="mobile-line"></div>
                </div>
                <div className="data-column line">
                    <div className="amount">5,007</div>
                    <div className="total">total backers</div>
                    <div className="mobile-line"></div>
                </div>
                <div className="data-column">
                    <div className="amount">56</div>
                    <div className="total">days left</div>
                </div>
            </div>
            <div className="progress-holder">
                <progress max="100000" value="89914"></progress>
            </div>
        </div>
    )
}
export default ProjectData;