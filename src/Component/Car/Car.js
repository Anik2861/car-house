import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Car.css'
const Car = ({ allCar, handleAddToCart}) => {
    // const {allCar,handleAddToCart}=props
    
    const { name, price, picture, id } = allCar
    return (
        <div className='car-details'>
            <div >
                <img className='car' src={picture} alt="" />
            </div>
            <div className='car-info'>
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <p><small>Id:{id}</small></p>
            </div>

            <button onClick={() => handleAddToCart(allCar)}  className='crt-btn'>
                <p> Add to cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Car;