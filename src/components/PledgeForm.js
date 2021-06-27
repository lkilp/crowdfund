import React, { useState } from 'react';
import './PledgeForm.scss';

const PledgeForm = (props) => {
    const { openPopup, isOpen, minimumAmount } = props;
    const [ pledgeAmount, setPledgeAmount ] = useState('');

    const validateAmount = (e) => {
        const { value } = e.target;
        if (/^[0-9]{0,4}$/.exec(value)) {
            setPledgeAmount(value);
        }
    }

    const amount = parseInt(pledgeAmount);
    const submit = () => {
        if (!isNaN(amount)) {
            if (amount > (minimumAmount - 1)) {
                        openPopup('thanks');
                    }
        }
        
    }
    return (
        <div className="PledgeForm">
            <div className={ isOpen ? "enter-pledge open" : "enter-pledge"} id="enter-pledge">
                <div className="enter-pledge-content">
                    <div className="enter-your-pledge">Enter your pledge</div>
                    <div className="pledge-continue">
                        <div className="change-pledge-amount">
                            <div className="dollar-sign">$</div>
                            <input className={"dollar-amount" + ((amount < (minimumAmount - 1)) ? " error" : "")} value={pledgeAmount} onInput={validateAmount} type="text" ></input>
                        </div>      
                        <button className="cyan-button" onClick={submit}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PledgeForm;