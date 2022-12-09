import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login({setIsSignedIn, setCurrentUser}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])
    const navigate = useNavigate()

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    // console.log(email, password)

    function handleSubmit(e){
        e.preventDefault()
            fetch("http://127.0.0.1:3000/auth/login", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
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
                        res.json().then((data) => setError(data))
                    }
                })
    }

    return(
        <div>
            <Header />
            <form id='loginForm' onSubmit={handleSubmit}>
            <label className='label' htmlFor="loginEmail">Email:</label>
            <input className='loginInput' id='loginEmail' onChange={handleEmail} required></input>

            <label className='label' htmlFor="loginPassword">Password:</label>
            <input className='loginInput' id='loginPassword' type='password' onChange={handlePassword} required></input>
            <button>Login</button>
            {error !== [] ? <p style={{color: 'red', fontFamily: 'Sora'}}>{error.message}</p> : null}
            <p>Don't have an account yet? <span onClick={()=> {navigate('/signup')}}>Sign up</span></p>
            </form>

            <div className="footer">
            <Footer />
            </div>
        </div>
    )
}





export default Login