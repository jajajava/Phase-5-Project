import React from "react";
import Header from './Header'

function NotFound(){
    
    let noMotion = false

    return(
        <div>
        <Header noMotion={noMotion} />
        <div id='h1Holder'>
        <h1 id='notFoundH1' style={{position: 'absolute'}} >This page doesn't exist!</h1>
        </div>
        
        </div>
    )
}





export default NotFound