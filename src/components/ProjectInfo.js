import React, { useState } from 'react';
import './ProjectInfo.scss';

const ProjectInfo = (props) => {
    const { openPopup } = props;
    const [bookmarked, setBookmarked] = useState(false);
    const toggleBookmarked = () => {
        setBookmarked(!bookmarked);
    }
    return(
        <div className="ProjectInfo">
            <div className="mastercraft-logo"></div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <h3>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h3>
            {bookmarked}
            <div className="buttons">
                <button className="cyan-button" onClick={() => openPopup('modal')} >Back this project</button>
                <button className={'bookmark-button' + (bookmarked ? ' active' : '')} onClick={toggleBookmarked}><div className="bookmark-icon"> 
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill={bookmarked ? "var(--dark-cyan)" : "#2F2F2F" } cx="28" cy="28" r="28"/><path fill={bookmarked ? "white" : "#B1B1B1"} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                </div><span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span></button>
            </div>
        </div>
    )
}
export default ProjectInfo;

