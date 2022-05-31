import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { ShoppingBasket } from '@material-ui/icons'
import { useStateValue } from '../../context/StateProvider'
import { auth } from '../../firebase/firebase'

const Header = () => {
  const [{ cart, user, address }, dispatch] = useStateValue()
  const [total, setTotal] = useState(0);

  const logout = () => {
    auth.signOut()
  }

  useEffect(() => {
    setTotal(cart?.reduce((total, item) => item.quantity + total, 0))
    localStorage.setItem("cart-items", JSON.stringify(cart))
  },[cart])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  
  return (
    <div className="header">
        <Link to="/">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header__logo"/>
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchField" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user?.email?.email && "/login"} className="header__navlink">
            <div className="header__navitem" onClick={logout}>
            <span className="header__navitemOptionOne">Hello {user?.email?.email}</span>
            <span className="header__navitemOptionSecond">{user?.email?.email ? 'Sign out' : 'Sign in'}</span>
            </div>
          </Link>
          <Link to="" className="header__navlink">
            <div className="header__navitem">
            <span className="header__navitemOptionOne">Returns</span>
            <span className="header__navitemOptionSecond">& Orders</span>
            </div>
          </Link>
          <Link to="" className="header__navlink">
            <div className="header__navitem">
            <span className="header__navitemOptionOne">Your</span>
            <span className="header__navitemOptionSecond">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__navlink">
            <div className="header__navCart">
              <ShoppingBasket />
              <span className="header__navCartOptionSecond">{total}</span>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header