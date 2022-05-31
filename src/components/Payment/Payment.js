import React from 'react'
import { Link } from 'react-router-dom'
import { getCartTotal } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'
import './Payment.css'

const Payment = () => {

  const [{cart, address}] = useStateValue()

  return (
    <div className="payment">
         <div className="payment__checkoutContainer">
            <Link to="/">
                <img
                className="logo_image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
                alt="" />
            </Link>
            <div className="payment__deliveryAddress">
                <h3>1. Select a delivery address</h3>
                <div className="payment__addressList">
                  <h4>Your addresses</h4>
                  {
                    address.map((item, index) => {
                      return (
                        <div key={index} className="payment__addressItem">
                          <input type="radio" name="addressRadio" id="addressRadio"/>
                          <label htmlFor="addressRadio"><strong> {item.fullName}</strong>{` ${item.houseNo}, ${item.area}, ${item.town}, ${item.state}, ${item.pincode}\nPhone number: ${item.mobileNo}`}</label>
                        </div>
                      )
                    })
                  }
                  <div className="payment__useAddressBtn">
                    <button>Use this address</button>
                  </div>
                </div>
            </div>
            <div className="payment__paymentOptions">
                <h3>2. Select a payment method</h3>
                <div className="payment__addressList">
                  <h4>Payment methods</h4>
                  <div className="payment__addressItem">
                    <input type="radio" name="paymentBtn"/>
                    <label htmlFor="addressRadio"><strong> Add a debit/credit card</strong></label>
                  </div>
                  <div className="payment__addressItem">
                    <input type="radio" name="paymentBtn"/>
                    <label htmlFor="addressRadio"><strong> Other UPI Apps</strong></label>
                    <p className="payment__upiIDLabel">Please enter your UPI ID</p>
                    <input type="text" className="payment__upiIDField" placeholder="Ex: MobileNumber@upi" />
                  </div>
                  <div className="payment__addressItem">
                    <input type="radio" name="paymentBtn"/>
                    <label htmlFor="addressRadio"><strong> Pay on Delivery</strong></label>
                    <p className="payment__upiIDLabel">Pay digitally with SMS Pay Link. Cash may not be accepted in COVID restricted areas. <a href="#1">Know more.</a></p>
                  </div>
                  <div className="payment__addressItem">
                    <input type="radio" name="paymentBtn"/>
                    <label htmlFor="addressRadio"><strong> Net Banking</strong></label>
                    <select className="payment__netBankField" >
                      <option>Choose an option</option>
                      <option>Bank Name</option>
                      <option>Bank Name</option>
                      <option>Bank Name</option>
                      <option>Bank Name</option>
                      <option>Bank Name</option>
                      <option>Bank Name</option>
                      <option>Bank Name</option>
                    </select>
                  </div>
                  <div className="payment__useAddressBtn payment__usePaymentBtn">
                    <button>Use this payment method</button>
                  </div>
                </div>
            </div>
            <div className="payment__orderedItems">
                <h3>3. Items and delivery</h3>
                <div className="payment__addressList">
                  {
                   cart.map(item => {
                     return (
                       <div className="payment__itemPreview">
                         <img src={item.image} alt="Error" className="payment__itemPreivewImage"/>
                         <p>{item.title} | Qty: {item.quantity}</p>
                       </div>
                     )
                   })
                  }
                  <div className="payment__useAddressBtn payment__placeOrderBtn">
                    <button>Place your order</button>
                    <p> Order total: ₹{getCartTotal(cart)}</p>
                  </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Payment