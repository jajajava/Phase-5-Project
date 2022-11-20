import {motion} from 'framer-motion'
import '../App.css';

import myVideo from '../photos-and-videos/Background bulb no fade.mp4'

//DELETE ORIGINAL VIDEO FILE FROM FOLDER


function App() {
  return (
    <div className="App">
      <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
        <p id="logo">Leader Electric</p>
      </motion.div>
      <video width="100vw" height="100vh" autoPlay muted id="myVideo">
        <source src={myVideo} type="video/mp4"/>
      </video>
      <motion.div animate={{scale: 1}} initial={{scale: 0}} transition={{duration: 1.1}}>
        <form>
          <input></input>
          <input></input>
          <button>Submit</button>
        </form>
      </motion.div>
    </div>
  );
}

export default App;
