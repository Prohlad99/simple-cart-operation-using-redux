import React, { useEffect, useState } from 'react';
import ProductCard from './../../components/products/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

  return (
    <div>
      {/* container  */}
      <div className='grid grid-cols-4 justify-items-center'>
        {
            products.map(product => <ProductCard key={Math.random()*2} product={product}/>)
        }
      </div>
    </div>
  )
}

export default Products
