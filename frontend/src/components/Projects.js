import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
// import Slideshow from "./Slideshow";

function Projects(){

    window.scrollTo({
        top: 25,
        behavior: 'smooth'
    });

    const projects = [{name: 'Kennedy House', image: 'https://photos.zillowstatic.com/fp/0009525b35db13bccbf509afa955ab11-se_large_800_400.webp', address: '110-11 Queens Blvd., Forest Hills, NY', job: 'Installation of one 1 MW generator'}, {name: 'New Yorker Hotel', image: 'https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,f_auto,h_1200,q_auto,w_1200/v1650651157/kksbbh3d9s1ocfnvqvlw.jpg', address: '481 8th Ave., New York, NY', job: 'DC Switchboard Replacement'}, {name: 'General Services Administration', image: 'https://static01.nyt.com/images/2009/11/02/nyregion/02detain_CA1/popup.jpg?quality=75&auto=webp&disable=upscale', address: '201 Varick St., New York, NY' , job: 'Installation of five 500 KW generators'}]
    console.log(projects)
    return(
        <div id='projectsAll'>

            <Header/>
            <div id='projectsAllBodyDiv'>
            {projects.map(each => <ProjectCard each={each}/>)}
            </div>
            <div className="footer">
            <Footer />
            </div>

        </div>
    )
}


export default Projects