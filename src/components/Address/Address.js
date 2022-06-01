import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../../context/StateProvider'
import './Address.css'

const Address = () => {

    const [,dispatch] = useStateValue()
    const navigate = useNavigate()

    

    const addAddress = (event) => {
        event.preventDefault()
        const fullName = document.getElementById("fullName").value
        const mobileNo = document.getElementById("mobileNumber").value
        const pincode = document.getElementById("pincode").value
        const houseNo = document.getElementById("houseNo").value
        const area = document.getElementById("area").value
        const landmark = document.getElementById("landmark").value
        const town = document.getElementById("town").value
        const state = document.getElementById("state").value

        if(fullName && mobileNo && pincode && houseNo && area && landmark && town && state) {
            dispatch({
                type: "ADD_NEW_ADDRESS",
                address: {
                    fullName,
                    mobileNo,
                    pincode,
                    houseNo,
                    area,
                    landmark,
                    town,
                    state
                },
            })
            navigate('/payment')
        }        

    }

    return (
        <div className="address">
            
            <form className="address__detailsForm">
            <Link to="/">
                <img
                className="logo_image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
                alt="" />
            </Link>
            <h3 className="address__deliveryLabel">Add a delivery address</h3>
                <div className="address__formFieldsContainer">
                    <label for="fullName">Full name</label>
                    <input type="text" id="fullName"/>
                </div>
                <div className="address__formFieldsContainer">
                    <label for="mobileNumber">Mobile number</label>
                    <input type="text" id="mobileNumber"/>
                </div>
                <div className="address__formFieldsContainer">
                    <label for="pincode">Pincode</label>
                    <input type="text" id="pincode" placeholder="6 digits [0-9] PIN code"/>
                </div>
                <div className="address__formFieldsContainer">
                    <label for="houseNo">Flat, House no., Building, Company, Apartment</label>
                    <input type="text" id="houseNo"/>
                </div>
                <div className="address__formFieldsContainer">
                    <label for="area">Area, Street, Sector, Village</label>
                    <input type="text" id="area"/>
                </div>
                <div className="address__formFieldsContainer">
                    <label for="landmark">Landmark</label>
                    <input type="text" id="landmark" placeholder="E.g. near apollo hospital"/>
                </div>
                <div>
                    <div className="address__formFieldsContainer">
                        <label for="town">Town/City</label>
                        <input type="text" id="town"/>
                    </div>
                    <div className="address__formFieldsContainer">
                        <label for="state">State</label>
                        <input type="text" id="state"/>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="defaultAddressCheckBox" />
                    <label for="defaultAddressCheckBox" className="address__defaultAddLabel">Make this my default address</label>
                </div>
                <div className="address__formFieldsContainer">
                        <label for="state" className="address__addressTypeLabel">Address type</label>
                        <select className="address__addressTypeDropDown">
                            <option className="address__addressType">Office/Commercial</option>
                            <option className="address__addressType">Home</option>
                        </select>
                </div>
                <button className="address__setAddressBtn" onClick={addAddress}>Use this address</button>
            </form>
        </div>
    )
}

export default Address