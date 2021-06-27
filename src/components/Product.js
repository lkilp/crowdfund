import React from 'react';
import './Product.scss';

const Product = (props) => {
    const { product, openPopup } = props;

    return(
        <div className={"Product" + (product.amountLeft === 0 ? ' out-of-stock' : '')}>
            <div className="product-title">
                <h3>{product.name}</h3>
                <div className="pledge">Pledge ${product.amount} or more</div>
            </div>
            <p>{product.summary}</p>
            <div className="amount-select">
                <div className="amount-left">
                    <div className="amount">{product.amountLeft}</div>
                    <div className="total">left</div>
                </div>
                <button className={"cyan-button" + (product.amountLeft === '0' ? ' out-of-stock-button' : '')} onClick={() => openPopup('modal')} >{ product.amountLeft !== '0' ? 'Select Reward' : 'Out of Stock' } </button>
            </div>
        </div>
    )
}
export default Product;

