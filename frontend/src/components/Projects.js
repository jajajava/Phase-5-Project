import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
// import Slideshow from "./Slideshow";

function Projects(){

    const [projects, setProjects] = useState([])

    window.scrollTo({
        top: 25,
        behavior: 'smooth'
    });

    useEffect(()=> {
        fetch('http://127.0.0.1:3000/projects')
        .then(res => res.json())
        .then(res => setProjects(res))
    }, [])

    return(
        <div id='projectsAll'>

            <Header/>
            <div id='projectsAllBodyDiv'>
            {projects?.map(each => <ProjectCard each={each}/>)}
            </div>
            <div className="footer">
            <Footer />
            </div>

        </div>
    )
}


export default Projects