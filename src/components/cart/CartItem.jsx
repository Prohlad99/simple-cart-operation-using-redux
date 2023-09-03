import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartItem = () => {
  const products = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState();
  const handleChange =()=>{
    setQuantity(products.quantity)
  }

  return (
    <div>
     {
      products?.slice().sort((a,b)=> a.position - b.position).map(product => 
      <div key={product.id} className='my-3 shadow-lg text-white bg-[#315269] h-[100px] border-[1px] border-[#95A0A7] rounded-md items-center grid grid-cols-12 mx-6'>
        {/* cart image  */}
        <div className='grid col-span-3'>
          <img className='h-[90px] rounded-md ml-3' src={product.img} alt="" />
        </div>

        {/* item details  */}
        <div className='grid col-span-6 justify-center'>
            <h1 className='font-bold'>{product.name}</h1>
            <p className='my-1'>Price: ${product.price} </p>
            <p>Manufacturer : {product.seller}</p>
        </div>


        {/* action  */}
        <div className='grid col-span-3 justify-center text-center mr-4'>
          <h1 className='center font-bold'>Quantity</h1>
          <div className='flex mt-3 mb-4'>
            <button onClick={()=>dispatch(removeFromCart(product.id))} className='border-l-[1px] border-b-[1px] border-t-[1px] rounded-l-md border-[#95A0A7] px-4 py-1 bg-red-400'>-</button>
            <p className=' border-[1px] border-[#95A0A7] w-[80px] text-center text-black bg-yellow-50'>{product.quantity}</p>
            <button onClick={()=>dispatch(addToCart(product))} className='border-r-[1px] border-b-[1px] border-t-[1px] rounded-r-md border-[#95A0A7] px-4 py-1 bg-green-400'>+</button>
          </div>
        </div>
      </div>)
     }
    </div>
  )
}

export default CartItem
