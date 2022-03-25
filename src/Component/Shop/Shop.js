import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css'


const Shop = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='container'>
            <div className='store-container'>
                {
                    cars.map(car => <Car
                        allCar={car}
                        id={car.id}
                    ></Car>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Cloth</h2>
                <button><p>Choose 1 for me</p></button><br />
                <button><p>Choose Again</p></button>
            </div>
        </div>
    );
};

export default Shop;