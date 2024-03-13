import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import pho from"../image/arrangement.avif"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Cart = () => {
  
  const click=()=>{
    window.scrollBy(0,1000)
   
   }

  const productData=useSelector((state)=>state.cart.items)
  return (
    <div>
          <div className='top'>
    <nav>
    <Link  className='center'  to="/Home">Home</Link>  
    <Link className='center ' to="/product">Products</Link>  
    <Link className='center active' to="/Cart">Cart <FaCartPlus /></Link>  
    <Link className='center' to="/Login">Login</Link> 
   
      </nav>
      </div>

      <div className='cover'>
        <img className='pictur' src={pho} alt='cover'/>
        <div className='header'>
            <h1 className='hed'>Buy Now</h1>
            <p className='des'> Our website has all the products you need at low prices, and we have renewed offers and discounts for a limited time.  </p>
            <button className='click' onClick={click}>Click here</button>

        </div>
     </div>
     <div><h1 className='title'>Your needs</h1></div>
     <div className='flex'>
     
      {
      productData?.map((r)=><Card key={r.id} dataa={r}/>)
    }
    </div>


<div className='footer'>
<div className="media" >
<Link  to="#">< FaFacebookSquare  className='med'/></Link>  
<Link to="#"><FaTwitterSquare className='med' /></Link> 
<Link to="#"><FaLinkedin className='med' /></Link> 
 

</div>
<span className='hr'> _______________________________________________________________________________________________________________________________________________________</span>

<div className="copy-right">Copyright <span className='sp' >©</span>2024 <span className='sp' >|</span> This Website is made by Sara Mourad.</div>

</div>
    </div>
  )
}

export default Cart
