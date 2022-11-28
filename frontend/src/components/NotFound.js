import React from "react";
import Header from './Header'
import Footer from "./Footer";

function NotFound(){
    
    let noMotion = false

    return(
        <div id="notFoundAll">
        <Header noMotion={noMotion} />
        <div id='h1Holder'>
        <h1 id='notFoundH1' style={{position: 'absolute'}} >This page doesn't exist!</h1>
        <Footer />

        </div>
        
        </div>
    )
}





export default NotFound