import React, { useState } from "react";

function ReviewContainer({each}){

    let stars = []
    for(let i=0; i < each.stars; i++){
        stars.push('x')
    }
    console.log(stars)
    return(
    
    <div id='reviewContainerAll'>
        <div id='starsDiv'>
            {stars.map(x => <p id='star'>★</p>)}
        </div>
        <h3 id='reviewContainerTitle'>{each.title}</h3>
        <p id='reviewContainerMessage'>{each.message}</p>
        <p>-{(each.user.name).split(" ").map((n)=>n[0]).join(".")}</p>
    </div>
    )
}


export default ReviewContainer