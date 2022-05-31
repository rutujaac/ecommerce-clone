import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from '../../firebase/firebase'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      navigate('/')
    })
    .catch((e) => alert(e.message))
  }
  const register = (event) => {
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
      console.log("Created user")
      navigate('/')
    })
    .catch((e) => alert(e.message))
  }

  const emailInputChange = (event) => {
    setEmail(event.target.value)
  }

  const passwordInputChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="login">
        <Link to="/">
            <img
            className="login_image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
            alt="" />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={emailInputChange} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={passwordInputChange} />
            <button className="login__loginBtn" onClick={login}>Sign in</button>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button className="login__createAccBtn" onClick={register}>Create your Amazon Account</button>
          </form>
        </div>
    </div>
  )
}

export default Login