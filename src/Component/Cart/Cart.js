import React from 'react';
import './Cart.css'
/* 
const { cart } = props
    let output = []
    for (const car of cart) {

        const result = <li>{car.name}
        </li>
        output.push(result)
    } */

const Cart = ({cart,chooseOneFromCart,removeAllFromCart }) => {
    
    
    return (
        <div>
            <h2>Selected Cars</h2>
            {
                cart.map(card => <li>{card.name}</li>)
            }


            <button onClick={chooseOneFromCart } className='selected-btn'><p>Choose 1 for me</p></button><br /><br />
            <button onClick={removeAllFromCart} className='selected-btn'><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;