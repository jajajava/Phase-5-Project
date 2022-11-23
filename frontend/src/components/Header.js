import React, { useState } from "react";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";


function Header({noMotion}){

  const navigate = useNavigate()
  // const noMotion = useReducedMotion()

  function takeMeHome(){
    navigate('/')
  }

    return (
      <>
        {noMotion = true ? 
          <div id="header">
            <p id="logo" style={{marginLeft: '100px'}} onClick={takeMeHome}>Lighter Electric</p> 
          <div id="headerLinkDiv">
            <p class="headerLinkText">Residential</p>
            <p class="headerLinkText">Commercial</p>
            <p class="headerLinkText">Industrial</p>
            <p class="headerLinkText">About</p>
          </div>
        </div>
        :
        <div id="header">
        <motion.div id="logo" style={{marginLeft: '100px'}} animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
          <p onClick={takeMeHome}>Lighter Electric</p>
        </motion.div>
        <motion.div id="headerLinkDiv" animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
          <p class="headerLinkText">Residential</p>
          <p class="headerLinkText">Commercial</p>
          <p class="headerLinkText">Industrial</p>
          <p class="headerLinkText">About</p>
        </motion.div>
        </div>
        }
        </>
    )
}


export default Header