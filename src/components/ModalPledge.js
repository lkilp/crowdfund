import React from 'react';
import './ModalPledge.scss';
import PledgeForm from './PledgeForm';



const ModalPledge = (props) => {
    const { pledge, setCurrentlyOpen, isOpen } = props;
    
    return(
        <div className={"ModalPledge" + (pledge.amountLeft === 0 ? ' out-of-stock' : '')}>
            <div className="container">
                <div className="input-container">
                    <input className='pledge-select' name="pledge-select" 
                        type="radio" checked={isOpen} id={pledge.name} value={pledge.name} onChange={() => setCurrentlyOpen(pledge.name)}></input>
                    <label htmlFor={pledge.name}>{pledge.title}</label>
                </div>
                <div className={`pledge-item ${pledge.reward ? '' : 'not-visible'}`}>
                    <div className="pledge-amount">Pledge ${pledge.amount} or more</div>
                    <div className="amount-left">
                        <div className="amount">{pledge.amountLeft}</div>
                        <div className="left">left</div>
                    </div>
                </div>
            </div>
            {/* {pledge.name}
            {currentlyOpen} */}
            <p className="pledge-info">{pledge.info}</p>
            <PledgeForm isOpen={isOpen} />
        </div>
    )
}
export default ModalPledge;

