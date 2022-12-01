import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import '../App.css';
import MyAccount from './MyAccount';
import Home from './Home';
import NotFound from './NotFound';
import Residential from "./Residential";
import Commercial from "./Commercial";
import Industrial from "./Industrial";
import About from "./About";
import Login from "./Login";
import Reviews from "./Reviews";


function App() {

  const [currentUser, setCurrentUser] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const token = localStorage.getItem('jwt')
  
  useEffect(()=> {token !== null? 
    fetch('http://127.0.0.1:3000/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => {setCurrentUser(res); setIsSignedIn(true);})
    : setIsSignedIn(false)}, [isSignedIn])

    function handleSignout(){
      localStorage.removeItem('jwt')
      setCurrentUser({})
      setIsSignedIn(false)
      window.location.reload()
    }


  return (
    <Routes>
      {currentUser? <Route path='/account' element={<MyAccount currentUser={currentUser} />} /> : <Route path='/account' element={<Login setCurrentUser={setCurrentUser} setIsSignedIn={setIsSignedIn}/>} />}
      <Route path='/' element={<Home isSignedIn={isSignedIn} currentUser={currentUser} handleSignout={handleSignout}/>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/residential' element={<Residential/>} />
      <Route path='/commercial' element={<Commercial/>} />
      <Route path='/industrial' element={<Industrial/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login setCurrentUser={setCurrentUser} setIsSignedIn={setIsSignedIn}/>} />
      <Route path='/reviews' element={<Reviews isSignedIn={isSignedIn}/>} />
    </Routes>
  );
}

export default App;