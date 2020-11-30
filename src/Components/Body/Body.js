import React, { useState } from 'react';
import { FakeData } from '../../Fakedata/FakeData';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import css from './Body.css';

const Body = () => {
    const first10 = FakeData.slice(0,10);
    const [courses,setCourses] = useState(first10);
    const [cart,setCart] = useState([]);

    const handleAddCourse = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='body-container row'>
           <div className='row course-container'>
               {
                 courses.map(crs => <Courses course={crs} handleAddCourse={handleAddCourse}></Courses>)
               }
           </div>
            
            <div className='cart-container'>
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;
 