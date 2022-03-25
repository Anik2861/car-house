import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    const handleAddToCart = (cars) => {
        const addCars = [...cart, cars]
        setCart(addCars)
    }
    return (
        <div className='container'>
            <div className='store-container'>
                {
                    cars.map(car => <Car
                        allCar={car}
                        key={car.id}
                        handleAddToCart={handleAddToCart}
                    ></Car>)

                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                     ></Cart>
            </div>
        </div>
    );
};

export default Shop;