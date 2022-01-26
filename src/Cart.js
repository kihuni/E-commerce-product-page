import React, {useState} from 'react';

const Cart = ({Showcart}) => {
    const [cart, setCart] = useState(false);
    const Showcart = () => setCart(!cart)
  return (
  <div className='cart-sec'>
   <p>cart</p>
   <p className='cart-p'>your cart is empty</p>
  </div>
  );
};

export default Cart;
