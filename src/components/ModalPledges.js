import React, { useState } from 'react';
import './ModalPledges.scss';
import ModalPledge from './ModalPledge';

const ModalPledges = (props) => {
    const [currentlyOpen, setCurrentlyOpen] = useState(null);
    const { closePopup } = props;

    const pledges = [
        {
            name: 'no-reward',
            title: 'Pledge with no reward',
            minimumAmount: 1,
            reward: false,
            info: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
        },
        {
            name: 'bamboo-stand',
            title: 'Bamboo Stand',
            minimumAmount: 25,
            amountLeft: 101,
            reward: true,
            info: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.`
        },
        {
            name: 'black-edition',
            title: 'Black Edition Stand',
            minimumAmount: 75,
            amountLeft: 64,
            reward: true,
            info: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
        },
        {
            name: 'special-edition',
            title: 'Mahogany Special Edition',
            minimumAmount: 200,
            amountLeft: 0,
            reward: true,
            info: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
        }
    ]
    return (
        <div className="ModalPledges">
            <div className="modal-content">
                <div className="close-button" onClick={closePopup}></div>
                <h2>Back this project</h2>
                <p className="project-info">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                {pledges.map(pledge => {
                    return <ModalPledge openPopup={props.openPopup} key={pledge.name} pledge={pledge} setCurrentlyOpen={setCurrentlyOpen} isOpen={currentlyOpen === pledge.name} />
                })}
            </div>
        </div>
    )
}
export default ModalPledges;