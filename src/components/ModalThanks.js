import React from 'react';
import './ModalThanks.scss';

const ModalThanks = (props) => {
    const { closePopup } = props;
    
    return(
        <div className="ModalThanks">
            <div className="modal-thanks-content">
                <div className="checkmark"></div>
                <div className="modal-thanks-text">
                    <h2>Thanks for your support!</h2>
                    <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.</p>
                </div>
                <button className="cyan-button got-it" onClick={closePopup}>Got it!</button>
            </div>
        </div>
    )
}
export default ModalThanks;
