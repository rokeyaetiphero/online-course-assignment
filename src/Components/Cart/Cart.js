import React from 'react';
import css from '../Cart/Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i<cart.length; i++) {
        const course = cart[i];
        total = total + course.Price; 
    }

    let Demand = 0;
    if(total>35){
        Demand =0;
    }
    else if(total>15){
        Demand = 4.99;
    }
    else if(total>0){
        Demand = 12.99;
    }
;
    return (
        <div class='cart-style'>
           <h3>Order summary</h3>
           <h6>Courses Ordered: {cart.length}</h6>
           <h6>Course cost: {Demand}</h6>
           <h6>Total Price: {total+Demand}</h6>
        </div>
    );
};

export default Cart;