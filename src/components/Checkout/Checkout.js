import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'

const Checkout = () => {
    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            {cart?.length == 0 ? (
                <div>
                    <h2>Your cart is empty</h2>
                </div>
            ): 
            (
                <div className="checkout__products">
                    <h2 className="checkout__cartHeadline">Your cart</h2>
                        {cart.map((item) => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                            quantity={item.quantity} />
                    ))}             
                </div>
                   
            )} 
            {cart.length > 0 && 
            <div className="checkout__subtotal">
                <Subtotal />
            </div>
            }
        </div>
    )
}

export default Checkout