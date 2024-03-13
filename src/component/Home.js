import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import'../css/nav.css'
import pic from"../image/photof.avif"
import { useNavigate } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  const navigate=useNavigate()
  const click=()=>{
    navigate('/Product')
  
  }
  return (
    <>
        <div className='top'>
    <nav>
    <Link  className='center active' to="/Home">Home</Link>  
    <Link className='center' to="/Product">Products</Link>  
    <Link className='center' to="/Cart">Cart <FaCartPlus /></Link>  
    <Link className='center' to="/Login">Login</Link> 
    
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

export default Home
