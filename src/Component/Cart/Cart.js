import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let output = []
    for (const car of cart) {

        const result = <li>{car.name}
        </li>
        output.push(result)
    }
    const eventHandler = () => {

    }
    return (
        <div>
            <h2>Selected Cars</h2>
            <h3> {output}</h3>

            <button onClick={() => eventHandler()} className='selected-btn'><p>Choose 1 for me</p></button><br /><br />
            <button ><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;