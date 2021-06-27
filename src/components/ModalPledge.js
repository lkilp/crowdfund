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
                    <div className="pledge-name-amount">
                        <label htmlFor={pledge.name}>{pledge.title}</label>
                        { pledge.reward && <div className="pledge-item">
                             <div className='pledge-amount'>Pledge ${pledge.minimumAmount} or more</div> 
                        </div> }
                    </div>
                </div>  
            </div>
            <p className="pledge-info">{pledge.info}</p>
            { pledge.reward && <div className='amount-left'> 
                        <div className="amount">{pledge.amountLeft}</div>
                        <div className="left">left</div>
            </div> }
            <PledgeForm openPopup={props.openPopup} isOpen={isOpen} minimumAmount={pledge.minimumAmount}/>
        </div>
    )
}
export default ModalPledge;

