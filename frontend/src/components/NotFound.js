import React from "react";
import Header from './Header'
import Footer from "./Footer";
import myVideo from "../photos-and-videos/Reversed bulb.mp4"

function NotFound(){

    return(
        <div id="notFoundAll">
            <Header />
        <h1 id='notFoundH1' style={{position: 'absolute'}} >This page doesn't exist!</h1>
        <video autoPlay muted id="myVideo">
        <source src={myVideo} type="video/mp4"/>
      </video>
        <div className="footer">
            <Footer />
            </div>
        
        </div>
    )
}





export default NotFound