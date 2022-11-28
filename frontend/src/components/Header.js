import React, { useState } from "react";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";


function Header({noMotion}){

  const navigate = useNavigate()
  // const noMotion = useReducedMotion()

  function takeMeHome(){
    navigate('/')
  }

  function handleResidential(){
    navigate('/residential')
  }
  function handleCommercial(){
    navigate('/commercial')
  }
  function handleIndustrial(){
    navigate('/industrial')
  }
  function handleAbout(){
    navigate('/about')
  }

    return (
      <>
        {noMotion = true ? 
          <div id="header">
            <p id="logo" style={{marginLeft: '100px'}} onClick={takeMeHome}>Lighter Electric</p> 
          <div id="headerLinkDiv">
            <p onClick={handleResidential} className="headerLinkText">Residential</p>
            <p onClick={handleCommercial} className="headerLinkText">Commercial</p>
            <p onClick={handleIndustrial} className="headerLinkText">Industrial</p>
            <p onClick={handleAbout} className="headerLinkText">About</p>
          </div>
        </div>
        :
        <div id="header">
        <motion.div id="logo" style={{marginLeft: '100px'}} animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
          <p onClick={takeMeHome}>Lighter Electric</p>
        </motion.div>
        <motion.div id="headerLinkDiv" animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
          <p className="headerLinkText">Residential</p>
          <p className="headerLinkText">Commercial</p>
          <p className="headerLinkText">Industrial</p>
          <p className="headerLinkText">About</p>
        </motion.div>
        </div>
        }
        </>
    )
}


export default Header