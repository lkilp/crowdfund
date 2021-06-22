import React from 'react';
import './PledgeForm.scss';

const PledgeForm = (props) => {
    const { isOpen } = props;
    return(
        <div className="PledgeForm">
            <div className={ isOpen ? "enter-pledge open" : "enter-pledge"} id="enter-pledge">
                <div className="enter-pledge-content">
                    <div className="enter-your-pledge">Enter your pledge</div>
                    <div className="pledge-continue">
                             <div className="">
                                <div className="change-pledge-amount">
                                    <div className="dollar-sign">$</div>
                                    <input className="dollar-amount" type="text" pattern="[0-9]{4}"></input>
                                </div>
                             </div>        
                        <button className="cyan-button">Continue</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default PledgeForm;