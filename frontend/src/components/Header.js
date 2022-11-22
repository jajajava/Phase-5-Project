import React, { useState } from "react";
import {motion} from 'framer-motion'

function Header(){

    return (
        <div id="header">
        <motion.div id="logo" style={{marginLeft: '100px'}} animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
          <p>Lighter Electric</p>
        </motion.div>
        <motion.div id="headerLinkDiv" animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>
          <p class="headerLinkText">Residential</p>
          <p class="headerLinkText">Commercial</p>
          <p class="headerLinkText">Industrial</p>
          <p class="headerLinkText">About</p>
        </motion.div>
        </div>
    )
}


export default Header