import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'
import { useNavigate } from 'react-router-dom'
import './Subtotal.css'

const Subtotal = () => {

    const [{ cart, user, address }] = useStateValue()
    const navigate = useNavigate()

    const proceedToCheckout = () => {
        if(user && user.email) {
            if(!address[0]) {
                console.log(""+address[0])
                navigate('/address')
            }
            else {
            console.log("Address found"+address[0])
            navigate('/payment')
            }
        } else {
            navigate('/login')
        }
    }
    
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>Subtotal ({cart.length} items): <strong>{`${value}`}</strong></p>
                        <small className="subtotal__gifts">
                            <input type="checkbox" className="subtotal__giftbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={proceedToCheckout}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal