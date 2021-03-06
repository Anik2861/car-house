import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

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

    const chooseOneFromCart = () => {
        let newItem = []
        const ran = Math.floor(Math.random() * cart.length)
        newItem.push(cart[ran]);
        setCart(newItem)
    }
    const removeAllFromCart = () => {
        setCart([])
    }

    return (
        
            <div>
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
                            chooseOneFromCart={chooseOneFromCart} removeAllFromCart={removeAllFromCart}
                        ></Cart>
                    </div>

                </div>

                <div className='accrodion'>
                <Accordion className='ask-Qustion'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2>How useState Works?</h2></Accordion.Header>
                        <Accordion.Body>
                            useState() একটি হুক। যা কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল থাকতে দেয়। useState হুক হল একটি বিশেষ ফাংশন । যা একটি আর্গুমেন্ট হিসাবে প্রাথমিক অবস্থা নেয় এবং দুটি এন্ট্রির একটি অ্যারে প্রদান করে থাকে এবং component এর মধ্যে যোগাযোগ করতে প্রপস ব্যবহার করা হয়।
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h2>Props vs State এর মধ্যে পার্থক্য কী?</h2></Accordion.Header>
                        <Accordion.Body>
                            <h4>Props:-</h4>
                            প্রপস শুধুমাত্র পঠনযোগ্য উপাদান।অর্থাৎ এটি পড়ার উপযুক্ত কিন্তু তা মডিফাই করা যায় না। এটি এমন একটি অবজেক্ট যা ট্যাগের অ্যাট্রিবিউটের মান সঞ্চয় করে এবং HTML অ্যাট্রিবিউটের মতো কাজ করে। এটি একটি উপাদান থেকে অন্য উপাদানে ডেটা পাস করার অনুমতি দেয়।
                            <h4> State:-</h4>
                            State এর পরিবর্তনগুলি অ্যাসিঙ্ক্রোনাস হতে পারে।State পরিবর্তনশীল।State Component সম্পর্কে তথ্য ধারণ করে।State এ child দ্বারা অ্যাক্সেস করা যাবে না এবং তথ্য শুধুমাত্র উপাদান এর মধ্যে পাস করা হয়।
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            </div>
            
        
    );
};

export default Shop;