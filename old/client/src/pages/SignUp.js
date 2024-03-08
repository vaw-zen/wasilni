import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from '../config/firebase'
import axios from 'axios'
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const user = auth.currentUser;
const initialState = { email: '', password: '', confirmPassword: '' }


const SignUp = () => {
  const navigate = useNavigate()



  const [error, setError] = useState("")
  const [input, setInput] = useState(initialState)


  const adduserFavourite = (email, uid) => {
    axios.post(`http://localhost:3000/favourites/add/${email}/${uid}`).then((e) => console.log()).catch(err => console.log(err))
  }

  const handleChange = ({ target }) => {
    setInput(

      { ...input, [target.name]: target.value });
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore(app);
    const dbRef = collection(db, "users");
    const data = {
      email: input.email,
      password: input.password
    };
    addDoc(dbRef, data)
      .then((element) => {
        console.log("Document has been added successfully");
        adduserFavourite(element.user.email, element.user.uid)
      })
      .catch(error => {
        console.log(error);
      })
    if (input.password != input.confirmPassword) { setError('password not match') }

    else {
      const { user }
        = createUserWithEmailAndPassword(auth, input.email, input.password)
          .then((res) => {
            console.log(res)
            setInput(initialState)

            alert("sign up succefully")
            navigate("/login");

          })
          .catch((error) => {
            console.log(error)
            setError(error.message)
          })
    }
  }
  return (
    <div className='signin-signup'>
      <div className='sinlog'>
        <br />
        <h1 className='h1'>signup page</h1>
        <form onSubmit={handleSubmit} className='signup' >
          <input
            type="text"
            value={input.email}
            autoComplete="off"
            onChange={handleChange}
            name="email"
            placeholder='Enter you email' />


          <input
            type="password"
            value={input.password}
            autoComplete="off"
            onChange={handleChange}
            name="password"
            placeholder='Enter your password' />


          <input
            type="password"
            value={input.confirmPassword}
            autoComplete="off"
            onChange={handleChange}
            name="confirmPassword"
            placeholder='Confirm password' />
          <button type='submit'>Submit</button>
          <p style={{ textAlign: "center", color: "red" }}
            className='form__error'>{error}</p>
          <br />
          <p style={{ color: "white", textAlign: "center" }}>
            Already a user ?
            <br />

            <Link to="/Login">Log in </Link>
          </p>
        </form>
      </div>
    </div>

  )
}

export default SignUp;
export const db = getFirestore(app);
