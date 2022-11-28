import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import myVideo from '../photos-and-videos/Background bulb no fade.mp4' //DELETE OLD VIDEO FILES FROM FOLDER
import Footer from './Footer';


function Home() {

  const navigate = useNavigate()

  function navigator(e){
    let id = e.target.id.toLowerCase()
    let split = id.split("home")
    return navigate(`${split[1]}`)
  }

  return (
    <div className="Home">
      <motion.div id="homePageHeader" style={{marginLeft: '100px'}} animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
          <p>Lighter Electric</p>
      </motion.div>
      <motion.div id="homePageLogin" animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
        <p id='homeReviews' className="headerLinkText" onClick={navigator}>Reviews</p>
        <p id='homeLogin' className="headerLinkText" onClick={navigator}>Login</p>
      </motion.div>
      <video autoPlay muted id="myVideo">
        <source src={myVideo} type="video/mp4"/>
      </video>
      <motion.div id='homeJobsContainer' animate={{y: -390, opacity: 1}} initial={{opacity: 0}} transition={{delay: 1.35, duration: 1.3}}>
      <div id='homeResidential' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>Residential</h1></div></div>
      <div id='homeCommercial' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>Commercial</h1></div></div>
      <div id='homeIndustrial' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>Industrial</h1></div></div>
      <div id='homeAbout' className='singleJobContainer' onClick={navigator}><div className="innerDiv"><h1>About</h1></div></div>
      </motion.div>
      <motion.div id='footer' animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 1.35, duration: 1.3}}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;