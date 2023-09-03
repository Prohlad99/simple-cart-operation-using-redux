import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/cart/CartItem';
import EmptyCart from '../../components/cart/EmptyCart';
import OrderSummary from '../../components/cart/OrderSummary';

const OrderReview = () => {
  const cart = useSelector(state => state.cart.cart)
 
  return (
    <div>
      {
        cart?.length?
        <div className='grid grid-cols-12 h-[500px] my-4 justify-center'>
          {/* cart item  */}
          <div className='grid col-span-8 h-full overflow-scroll'>
              <div><CartItem /></div>
          </div>
  
          {/* order summery  */}
          <div className='gird col-span-4 justify-self-center'>
              <div><OrderSummary/></div>
          </div>
        </div>: <EmptyCart/>
      }
    </div>
  )
}

export default OrderReview
