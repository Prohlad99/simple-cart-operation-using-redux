import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/features/cart/cartSlice';

const OrderSummary = () => {
  const cart = useSelector(state => state.cart.cart)
  let totalProduct = 0;
  let totalPrice = 0;
  const counter = (product)=>{
    totalPrice += product.quantity*product.price;
    totalProduct +=  product.quantity;
  }
   
  cart.forEach(product => counter(product))
  const dispatch = useDispatch()

  return (
    <div>
      {/* container  */}
      <div className='bg-[#335a76] w-[340px] text-white grid justify-center p-2 rounded-md'>
        {/* order details  */}
        <div className='tracking-widest leading-8'>
            <h1 className='text-center text-2xl underline mb-8'>Order Summary</h1>
            <p className='my-2'>Selected Items: {cart.length}</p>
            <p className='my-2'>Selected Products: {totalProduct}</p>


            <p className='my-2'>Total Price: ${totalPrice}</p>
            <p className='my-2'>Total Shipping Charge: $5</p>
            <p className='my-2'>Tax: $114</p>
            <h2 className='my-2 text-xl mb-6'>Grand Total: ${totalPrice+5+114}</h2>
        </div>

        {/* button  */}
        <div className='grid'>
            <button onClick={()=>dispatch(clearCart())} className='border-[1px] border-l-indigo-400 bg-red-500 py-2 rounded-md my-2'>Clear Cart</button>
            <button className='border-[1px] border-l-indigo-400 bg-[#FF9900] py-2 rounded-md my-2'>Proceed Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
