import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import pictur from"../image/istockphoto.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../css/singlp.css'


const SingleProduct = () => {

const [product,setproduct]=useState()
  const params=useParams()
  const pid=params.id


  useEffect(()=>{

    axios.get(`https://dummyjson.com/products/${pid}`).then((resp)=>setproduct(resp.data)).catch((error)=>console.log(error))
  },[])

  const click=()=>{
    window.scrollBy(0,1000)
   
   }

  return (
    <>
  <div className='top'>
    <nav>
    <Link  className='center'  to="/Home">Home</Link>  
    <Link className='center active' to="/product">Products</Link>  
    <Link className='center' to="/Cart">Cart <FaCartPlus /></Link>  
    <Link className='center' to="/Login">Login</Link> 

      </nav>
      </div>

      <div className='cover'>
        <img className='pictur' src={pictur} alt='cover'/>
        <div className='header'>
            <h1 className='hed'>Buy Now</h1>
            <p className='des'> Our website has all the products you need at low prices, and we have renewed offers and discounts for a limited time.  </p>
            <button className='click' onClick={click}>Click here</button></div></div>




<div className="sin">
<img className='big'  src={product?.thumbnail} alt='product'/>
<div className="cn">
<span className="sp1">{product?.title}</span>
<p className="p1">Price : {product?.price} L.E </p>
   <p className="p1">{product?.description}
</p>
<div className="order">
<Link to="#"><button  className="buut">Buy Now</button></Link>
<Link to="/Product"><button className="tton">Back</button></Link>
</div>
</div></div>








    
    <div className='footer'>
<div className="media" >
<Link  to="#">< FaFacebookSquare  className='med'/></Link>  
<Link to="#"><FaTwitterSquare className='med' /></Link> 
<Link to="#"><FaLinkedin className='med' /></Link> 
 

</div>
<span className='hr'> _______________________________________________________________________________________________________________________________________________________</span>

<div className="copy-right">Copyright <span className='sp' >©</span>2024 <span className='sp' >|</span> This Website is made by Sara Mourad.</div>

</div>
    </>
  )
}

export default SingleProduct
