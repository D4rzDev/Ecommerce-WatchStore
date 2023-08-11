import React, {useState} from 'react'
import {HiOutlineMenuAlt3,HiShoppingCart} from 'react-icons/hi'
import {RiCloseFill} from  'react-icons/ri'
import {MdDelete} from 'react-icons/md'
import { useCart } from '../CartContext'

const Navbar = () => {

  const { cart } = useCart();
  const {removeFromCart, getTotalPrice} = useCart();

  const [nav, setNav] = useState();
  const [product, setProduct] = useState();

  const handleNav = () => {
    setNav( !nav);
  }

  const handleProduct = () => {
    setProduct(!product);
  }
  return (
    <nav className=' relative'>
        <div className=' flex items-center justify-between px-6 py-4 bg-black lg:px-10 lg:pt-8'>
            <img src="/assets/watch.png" alt="" />

            <ul className=' hidden gap-6 lg:flex'>
              <a className=' text-sm font-light' href="">Home</a>
              <a className=' text-sm font-light' href="">Brands</a>
              <a className=' text-sm font-light' href="">Recent Products</a>
              <a className=' text-sm font-light' href="">Contact</a>
              <a className=' text-sm font-light' href="">About</a>
            </ul>

            <div className=' flex items-center justify-center gap-4'>
              <p className=' flex'><HiShoppingCart onClick={handleProduct} size={25}/><span className=' text-white text-[10px] text-center bg-red-700 h-4 w-4 rounded-full'>{cart.length}</span></p>
                <div className=' lg:hidden ' onClick={handleNav}>
                  {!nav ? <HiOutlineMenuAlt3 size={25}/> : <RiCloseFill size={25}/>}
                </div>
            </div>
        </div>

        <div className={!product ? 'hidden' : ' cart absolute right-0 pt-4 pb-4 px-4 text-white'}>
          <div className='flex flex-col items-center gap-4 h-screen w-[200px]'>
            <div className='max-h-[70vh] overflow-y-auto'>
              {cart.map((cartItem) => (
                <div className='flex flex-row items-center justify-center gap-4 pb-4' key={cartItem.product.id}>
                  <img className='h-[50px]' src={cartItem.product.img} alt='' />
                  <div className='flex flex-col items-start pr-4'>
                    <h1 className='text-xs font-normal'>{cartItem.product.name}</h1>
                    <h1 className='text-sm font-bold'>${cartItem.product.price}</h1>
                    <h1 className='text-[10px] font-light'>Quantity: {cartItem.quantity}</h1>
                  </div>
                  <MdDelete onClick={() => removeFromCart(cartItem)} size={30} />
                </div>
              ))}
            </div>
            <h1 className='text-white text-xs font-bold pt-6'>Total Amount: ${getTotalPrice().toFixed(2)}</h1>
            <button className='bg-blue-800 text-white px-10 py-2 rounded-lg' type='submit'>
              Checkout
            </button>
          </div>
        </div>

        <ul className={!nav ? 'hidden' : ' navigation absolute flex flex-col w-screen h-screen items-center pt-10 gap-6'}>
          <a className=' text-lg font-bold' href="">Home</a>
          <a className=' text-lg font-bold' href="">Brands</a>
          <a className=' text-lg font-bold' href="">Recent Products</a>
          <a className=' text-lg font-bold' href="">Contact</a>
          <a className=' text-lg font-bold' href="">About</a>
        </ul>

    </nav>
  )
}

export default Navbar