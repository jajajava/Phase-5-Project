import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Lightbulb from '../photos-and-videos/Lightbulb.png'
import { useNavigate } from "react-router-dom";

function Industrial(){

    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/jobs')
        .then(res => res.json())
        .then(res => setJobs(res.filter(each => each.category === 'residential')))
    }, [])

    return(
        <div id="jobAll">
            <Header />
            <div id='jobDiv'>
                <h1>Industrial:</h1>
                <div>
                {jobs.map((each)=> <li key={each.id}>{each.task}</li>)}
                </div>
                <button onClick={()=> navigate('/request')}>Request service</button>
                <h3>Call us at 000-000-0000 for a free estimate, or if you have drawings,<br/> you can send them to <a style={{color: 'white'}} href="mailTo:estimating@leaderelectric.net">estimating@lighterelectric.net</a></h3>
            </div>
                <img src={Lightbulb} alt="broken" id='myImg'></img>
            <div className="footer">
            <Footer />
            </div>
        </div>
    )
}

export default Industrial