import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const element = <FontAwesomeIcon icon ={faCoffee}/>

const Product = (props) => {
    const {img, name, seller, price, stock}= props.product;
    return (
        <div className='product'>
            <img src={img} alt="product Image"/>
            <div className="product-info">
                <h4 className='product-name'>{name}</h4>
                <p className='seller'>By: {seller}</p>
                <div className="price-and-feature">
                    <div className="price-info">
                        <p>$ {price}</p>
                        <p>Only left {stock} in stock order soon</p>
                        <button className='addToCart' onClick={()=>props.handelAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
                    </div>
                    <div className="review">
                        <p>star</p>
                        <h2>Features</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;