import React from 'react';
import './About.scss';
import Product from './Product';

const About = (props) => {
    const { openPopup } = props;
    const products = [
        {
            name: 'Bamboo Stand',
            amount: 25,
            summary: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.`,
            amountLeft: 101,
        },
        {
            name: 'Black Edition Stand',
            amount: 75,
            summary: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
            amountLeft: 64
        },
        {
            name: 'Mahogany Special Edition',
            amount: 200,
            summary: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
            amountLeft: 0
        }
    ]
    return(
        <div className="About">
            <h3>About this project</h3>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
  to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            {products.map(product => {
                return <Product key={product.name} product={product} openPopup={openPopup} />
            })}
        </div>
    )
}
export default About;