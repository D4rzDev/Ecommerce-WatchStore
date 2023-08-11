import { useState } from 'react'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useCart } from '../CartContext';

const Products = () => {

    const {addToCart} = useCart();

    const products = [
        { id: 1, img:'/assets/product1.png', name: 'Watch 1', price: 255.00 },
        { id: 2, img:'/assets/product2.png', name: 'Watch 2', price: 255.00 },
        { id: 3, img:'/assets/product3.png', name: 'Watch 3', price: 255.00 },
        { id: 4, img:'/assets/product4.png', name: 'Watch 4', price: 255.00 },
        { id: 5, img:'/assets/product5.png', name: 'Watch 5', price: 255.00 },
        { id: 6, img:'/assets/product6.png', name: 'Watch 6', price: 255.00 },
        { id: 7, img:'/assets/product1.png', name: 'Watch 7', price: 255.00 },
        { id: 8, img:'/assets/product2.png', name: 'Watch 8', price: 255.00 },
        { id: 9, img:'/assets/product3.png', name: 'Watch 9', price: 255.00 },
        { id: 10, img:'/assets/product4.png', name: 'Watch 10', price: 255.00 },
    ];

  return (
    <div className=' flex flex-col items-center justify-center pt-10 pb-10 text-black bg-white px-10 lg:px-20'>
        <p className=' text-[10px] text-blue-600 font-light'>Find your favourite smart watch.</p>
        <h1 className=' text-lg font-bold pb-10'>Our Latest Products</h1>

        <div className=' flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-8'>
            {products.map((product) => (
              
                 <div key={product.id} className=' flex flex-col items-center justify-center bg-gray-300 px-2 py-2 rounded-xl'>
                    <img className=' h-[100px] lg:h-[150px]' src={product.img} alt="" />
                    <h1 className=' text-xs font-bold'>{product.name}</h1>
                    <p className=' text-sm font-extrabold'>${product.price}</p>
                    <button onClick={() => addToCart(product)} className=' flex items-center bg-blue-800 text-white px-4 py-2 rounded-lg font-bold text-xs'><AiOutlineShoppingCart/> Add to Cart</button>
                </div>
            ))}
            

        </div>
        

    </div>
  )
}

export default Products