import React, { useEffect, useState } from 'react'
import { DynamicStar } from 'react-dynamic-star'
import { useStateValue } from '../../context/StateProvider'
import './CheckoutProduct.css'

const CheckoutProduct = ({id, title, image, rating, price, quantity}) => {

  const [{cart}, dispatch] = useStateValue()
  const [prodQty, setProdQty] = useState(0)

  const quantityOptions = [1,2,3,4,5,6,7,8,9,10]

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  const updateQuantity = (event) => {
    dispatch({
      type: 'UPDATE_PRODUCT_QUANTITY',
      item: {
        id,
        quantity: parseInt(event.target.value)
      }
    })
  }

  console.log(quantity)

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image"/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price} | Qty: <select value={quantity} onChange={updateQuantity} className="checkoutProduct__quantity">{quantityOptions.map((qty) => (
            <option>{qty}</option>
            ))}</select></strong>
        </p>
        <div className="checkoutProduct__rating">
          <DynamicStar rating={rating} className="checkout__ratingStar" width={20} height={20} outlined={true} totalStars={5} />
        </div>
                  
        <button className="checkoutProduct__removeFromCart" onClick={removeFromCart}>Remove</button>
        </div> 
    </div>
  )
}

export default CheckoutProduct