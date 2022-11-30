import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import myVideo from '../photos-and-videos/Background bulb no fade.mp4' //DELETE OLD VIDEO FILES FROM FOLDER
import Footer from './Footer';
import {IoLogOutOutline} from "react-icons/io5"


function Home({currentUser, isSignedIn, handleSignout}) {

  const navigate = useNavigate()

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  function navigator(e){
    let id = e.target.id.toLowerCase()
    let split = id.split("home")
    return navigate(`${split[1]}`)
  }

  return (
    <div className="Home">
      <motion.div id="homePageHeader" style={{marginLeft: '100px'}} animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.3, duration: 0.5}}>
          <p>Lighter Electric</p>
      </motion.div>
      <motion.div id="homePageLogin" animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.3, duration: 0.5}}>
        <p id='homeReviews' className="headerLinkText" onClick={navigator}>Reviews</p>
        <p id='homeContact' className="headerLinkText" onClick={navigator}>Contact Us</p>
        {currentUser? <p id='homeLogin' className='headerLinkText'>My account</p> : <p id='homeLogin' className="headerLinkText" onClick={navigator}>Login</p> }
        {currentUser? <IoLogOutOutline id='logoutComponent' className='headerLinkText' onClick={handleSignout}/> : null}
      </motion.div>
      <video autoPlay muted id="myVideo">
        <source src={myVideo} type="video/mp4"/>
      </video>
      <motion.div id='homeJobsContainer' animate={{y: -390, opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.5, duration: 1.3}}>
      <div id='homeResidential' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>Residential</h1></div></div>
      <div id='homeCommercial' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>Commercial</h1></div></div>
      <div id='homeIndustrial' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>Industrial</h1></div></div>
      <div id='homeAbout' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>About</h1></div></div>
      </motion.div>
      <motion.div id='homeFooter' className='footer' animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.5, duration: 1.3}}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;