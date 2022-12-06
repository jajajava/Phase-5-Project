import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Signup({setIsSignedIn, setCurrentUser}){

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const navigate = useNavigate()

function handleEmail(e){
    setEmail(e.target.value)
}

function handlePassword(e){
    setPassword(e.target.value)
}

function handleName(e){
    setName(e.target.value)
}

function handlePhone(e){
    setPhone(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            name: name,
            password: password,
            email: email,
            phone: phone
        })
    })
    .then((res) => {
        if (res.ok){
            res.json().then((data) => {
            localStorage.setItem("jwt", data.token);
            setIsSignedIn(true);
            setCurrentUser(data.user)
            navigate('/')
            })
        } else {
            localStorage.setItem("jwt", null)
            // setError(true)
        }
    })
}

return(
    <div>
            <Header />
            {/* onSubmit={handleSubmit} */}
            <form id='signupForm' onSubmit={handleSubmit}> 

            <label className='label' htmlFor="signupEmail">Email:</label>
            <input className='signupInput' id='signupEmail' onChange={handleEmail}></input>

            <label className='label' htmlFor="signupPassword">Password:</label>
            {/* onChange={handlePassword} */}
            <input className='signupInput' id='signupPassword' type='password' onChange={handlePassword}></input>

            <label className='label' htmlFor="signupName">Name:</label>
            <input className='signupInput' id='signupName' onChange={handleName}></input>

            <label className='label' htmlFor="signupPhone">Phone:</label>
            <input className='signupInput' id='signupPhone' onChange={handlePhone}></input>

            <button>Sign up</button>
            <p>Already have an account? <span onClick={()=> {navigate('/login')}}>Sign in</span></p>
            </form>

            <div className="footer">
            <Footer />
            </div>
    </div>
)


}






export default Signup