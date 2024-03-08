
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { firebaseConfig } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const initialState = { email: '', password: '' }


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const Login = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState(initialState)
  const [error, setError] = useState('')

  const handleChange = ({ target }) => {
    setInput({
      ...input, [target.name]: target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, input.email, input.password)
      .then((userCred) => {
        setInput(initialState)
        navigate("/")
        console.log(userCred);

      })
      .catch((error) => {
        setError(error.message)
      });

  }

  return (
    <div className='signin-signup'>
      <div className='sinlog'>
        <br />
        <h1 className='h1'>Login</h1>
        <br />
        <form onSubmit={handleSubmit} className='login'>


          <input
            type="text"
            value={input.email}
            autoComplete="off"
            onChange={handleChange}
            name="email" placeholder='Email' />

          <input
            type="password"
            value={input.password}
            autoComplete="off"
            onChange={handleChange}
            name="password" placeholder='Password' />
          <button type='submit'>Submit</button>

          <p style={{ textAlign: "center", color: "red" }} className='form__error'>{error}</p>
          <br />
          <p style={{ color: "white", textAlign: "center" }}>
            Not a user ? <Link to="/signup"> SignUp </Link></p>

        </form>
      </div>
    </div>
  )
}

export default Login
