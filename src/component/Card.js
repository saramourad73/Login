import React from 'react'
import { useDispatch } from 'react-redux';
import { cartslice } from '../redux/cartslice';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {

  const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
   
    <div className='singl' >
    <img  src={props.dataa.thumbnail} alt='product'/>
    <h3>{props.dataa.title}</h3>
    <p>Price : {props.dataa.price}L.E</p>
    <div className='groub'>
      <button onClick={()=>dispatch(cartslice.actions.addtocart(props.dataa))}>Add to Cart</button>
      <button onClick={()=>navigate(`${props.dataa.id}`)}>Show More </button>
    </div>





   </div>

     

      
  )
}

export default Card
