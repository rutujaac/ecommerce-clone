import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { DynamicStar } from 'react-dynamic-star'
import './Product.css'

const Product = ({ id, title, image, price, rating }) => {

    const [, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                image,
                price,
                rating,
                quantity: 1
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                   <DynamicStar rating={rating} className="product__ratingStar" width={20} outlined={true} totalStars={5} />
                </div>
            </div>       
            <img src={image} className="product__image" />
            <button className="product__addToCartButton" onClick={addToCart}>Add to cart</button>
        </div>
  )
}

export default Product