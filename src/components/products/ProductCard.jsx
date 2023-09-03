import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const ProductCard = ({product}) => {

    const dispatch = useDispatch()
    const {id, name, img, price, ratings, seller} = product
    const ProductRatings = [];

    for(let i=0; i<ratings; i++){
      ProductRatings.push(<AiFillStar/>)
    }
  return (
    <div>
      {/* card container  */}
      <div className='w-[280px] h-[450px] border-[1px] border-[#95A0A7] rounded-md relative my-4'>
        {/* card image  */}
        <div className='h-[250px] items-center grid overflow-hidden justify-center bg-indigo-200 m-1 rounded-md mb-6'>
            <img className='h-full rounded-md'  src={img} alt="" />
        </div>

        {/* card details  */}
        <div className='absolute bottom-0 w-full p-2'>
            <div>
                <h2 className='font-semibold text-[20px] uppercase'>{name}</h2>
                <p className='mb-2'>Price: ${price} </p>
                <p>Manufacturer : {seller}</p>
                <p className='flex items-center gap-2'>Rating : <span className='flex mt-1'>
                    {
                        ProductRatings.map(rating => <span key={Math.random()}>{rating}</span>)
                    }
                    </span></p>
            </div>
            <div className='mt-3 mb-0'>                
                <button onClick={()=>dispatch(addToCart(product))} className='bg-[#48bbde] w-full font-semibold py-2 flex justify-center items-center gap-2 rounded-md'>Add to Cart <AiOutlineShoppingCart/></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
