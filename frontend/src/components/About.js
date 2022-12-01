import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "../photos-and-videos/AboutUs.jpg"
import { useNavigate } from "react-router-dom";

function About(){

    const navigate = useNavigate()
    // console.log(window.location.href.split('3001/')[1])
    window.scrollTo({
        top: 60,
        behavior: 'smooth'
    });

    // function toReviews(){
    //     navigate('/reviews')
    // }
    
    return(
    <div id='aboutAll'>
        <Header />
        <div>
            <img id="aboutUsImg" src={AboutUs}/>
            <p id="aboutUsP" style={{color: 'white'}}>We are committed to providing excellent service to our customers:
            Lighter Electric is a fully licensed and insured, non-union electrical contractor company offering a wide range of services, large and small, for clients in the five boroughs of New York City and Northern New Jersey. 
            For the past twenty-five years we have prided ourselves in providing top quality work at reasonable prices by paying attention to detail and practicing precision craftsmanship—that is why we can GUARANTEE our work.
            When you call us, you will always get a person - not an answering machine - who will promptly help you with setting up an appointment for a free estimate or scheduling a job. 
            You can be sure that when you set aside time for your project our expert technicians will be there on time and ready to go!

            Whatever your needs, whether it is finding a fault in your wiring, designing a new lighting system or building a power plant, you can count on Lighter Electric. 
            Our experience in troubleshooting, renovations, new construction and industrial work has earned us the solid reputation of being the "Leaders in Power!"
            </p>
            <div id='aboutUsDiv'>
            <p id="aboutUsPortfolio" className="headerLinkText" style={{paddingInline: '40px'}}>Portfolio</p>
            <p id="aboutUsReviews" className="headerLinkText" style={{paddingInline: '40px'}} onClick={()=>{navigate('/reviews')}}>Reviews</p>
            </div>
            
        </div>
        <div id='aboutUsFooter' className="footer">
        <Footer />
        </div>
    </div>
    )
}






export default About