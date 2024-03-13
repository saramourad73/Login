import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import'../css/nav.css'
import pic from"../image/photof.avif"

const Nav = () => {

   const click=()=>{
window.scrollBy(0,1000)
   }
      return (
    <>
    <div className='top'>
    <nav>
    <Link  className='center active'  to="home">Home</Link>  
    <Link className='center' to="product">Products</Link>  
    <Link className='center' to="cart"> Cart <FaCartPlus /></Link>  
    <Link className='center' to="login">Login</Link> 
    
      </nav>
      </div>

      <div className='cover'>
        <img className='pic' src={pic} alt='cover'/>
        <div className='header'>
            <h1 className='hed'>Buy Now</h1>
            <p className='des'> Our website has all the products you need at low prices, and we have renewed offers and discounts for a limited time.  </p>
            <button className='click' onClick={click}>Start Now</button>

        </div>
     </div>

     <div className='s'>
        <h1>gkhfkfh</h1>
     </div>
    </>
  )
}

export default Nav
