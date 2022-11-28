import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Lightbulb from '../photos-and-videos/Lightbulb.png'

function Commercial(){

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/jobs')
        .then(res => res.json())
        .then(res => setJobs(res.filter(each => each.category === 'commercial')))
    }, [])
    console.log(jobs)

    return(
        <div id="jobAll">
            <Header />
            <div id='jobDiv'>
                <h1 style={{textDecoration: 'underline'}}>Commercial:</h1>
                {jobs.map((each)=> <li>{each.task}</li>)}
                <button>Request service</button>
            </div>
                <img src={Lightbulb} alt="broken" id='myImg'></img>
                <div ></div>
            <Footer />
        </div>
    )
}

export default Commercial