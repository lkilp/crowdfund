import React, { useState } from 'react';
import './ProjectInfo.scss';

const ProjectInfo = () => {
    const [bookmarked, setBookmarked] = useState(false);
    const activateBookmarked = () => {
        setBookmarked(true);
    }

    const disactivateBookmarked = () => {
        setBookmarked(false);
    }
    return(
        <div className="ProjectInfo">
            <div className="mastercraft-logo"></div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <h3>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h3>
            {bookmarked}
            <div className="buttons">
                <button className="cyan-button"  >Back this project</button>
                { !bookmarked ? 
                <button className="bookmark-button" onClick={activateBookmarked}><div className="bookmark-icon"></div><span>Bookmark</span></button> :
                <button className="bookmark-button active" onClick={disactivateBookmarked}><div className="bookmark-icon active"></div><span>Bookmarked</span></button>}
            
            </div>
        </div>
    )
}
export default ProjectInfo;

// function App() {
//     const [popup, setPopup] = useState(false);
//     const closePopup = () => {
//       setPopup(false);
//     }
//     const openPopup =() => {
//       setPopup(true);
//     }
//     return (
//       <div className="App">
//         <Header />
//         <Project openPopup={openPopup} />
//         { popup && <Modal closePopup={closePopup}/> }
//       </div>
//     );