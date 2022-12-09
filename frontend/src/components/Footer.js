import React from "react";
import {FaFacebookSquare} from 'react-icons/fa'
import {MdEmail} from "react-icons/md"

function Footer(){

    return(
        <div>
            <p id='footerP'>000-000-0000 <br/>3142 Williams Suite 819 <br/> New York, NY 10027</p>
            <p id='footerCopyright'>© 2022 Lighter Electric</p>
            <div id='footerContacts'>
            <a href="mailTo:info@leaderelectric.net"> <MdEmail id="emailIcon" /> </a> 
            <a href="https://www.facebook.com/leaderelectric/" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare id="facebookIcon"/> </a>
            </div>
        </div>
    )
}

export default Footer