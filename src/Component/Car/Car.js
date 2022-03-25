import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Car.css'
const Car = (props) => {

    const { name, price, picture,id } = props.allCar
    return (
        <div className='car-details'>
            <div >
                <img className='car' src={picture} alt="" />
            </div>
            <div className='car-info'>
                <h2>{name}</h2>
                <h2>Price:${price}</h2>
                <p><small>Id:{id}</small></p>
                
                <button className='crt-btn'>
                    <p> Add to cart </p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    
                    </button>
            </div>
        </div>
    );
};

export default Car;