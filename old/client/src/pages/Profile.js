import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { FaHome, FaSuitcase } from "react-icons/fa";
import { Link } from 'react-router-dom';

import axios from 'axios'
const Profile = () => {
    const [file, setFile] = useState("")
    const [url, setUrl] = useState("http://s3.amazonaws.com/37assets/svn/765-default-avatar.png")
    const [show, setShow] = useState(true)

    //  const[phone,setPhone]=useState("")
    const [name, setName] = useState("")
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user)
    const change = (e) => { setName(e.target.value) }
    // const changeN=(e)=>{setPhone(e.target.value)}
    const upload = () => {
        const form = new FormData()
        form.append('file', file)
        form.append('upload_preset', "ahlemfrh")
        axios.post("https://api.cloudinary.com/v1_1/dipm0q7ua/upload", form)
            .then((result) => {
                console.log(result)
                setUrl(result.data.secure_url)
            })
        setShow(!show)
    }

    const update = () => updateProfile(user, {

        displayName: name, photoURL: url
    }).then(() => {
        console.log('user updated')

    }).catch((error) => {
        console.log(error)
        console.log('this is user', user)
    });

    return (
        <div className='profile'>
            <div className='cont'>


                <p>{< img src={url} widht='100px' height='100px' className='im' />}</p>

                <h2 className='text'> {user.displayName}</h2>
                <h2 className='text'> {user.email} </h2>
                <Link to={'/'}>
                    <FaHome style={{
                        width: "50px", height: "50px", color: "white", marginLeft: "45%"

                    }} />
                </Link>
                {show && < input placeholder='Name' onChange={change}></input>}
                {show && <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />}
                {/* <input placeholder='Phone Number' onChange={changeN}/> */}
                {show && <button onClick={update}>uppload image</button>}
                {show && <button onClick={upload}>update</button>}
            </div>
        </div>
    );
}
export default Profile;