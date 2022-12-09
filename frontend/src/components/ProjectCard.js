import React from "react";

function ProjectCard({each}){
    return(
        <div id='projectCardAll'>
            <img src={each.image}/>
            <div id='projectCardInnerDiv'>
                <h1><span className="projectCardSpan">{each.name}</span></h1>
                <h2><span className="projectCardSpan">Address:</span>{each.address}</h2>
                <h2><span className="projectCardSpan">Job:</span>{each.job}</h2>
            </div>
            
        </div>
    )
}





export default ProjectCard