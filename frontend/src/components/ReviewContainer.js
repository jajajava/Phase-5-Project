import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai"

function ReviewContainer({each, currentUser, handleDelete}){

    let stars = []
    for(let i=0; i < each.stars; i++){
        stars.push('x')
    }

    console.log(each)
    return(
    <div id='reviewContainerAll'>
        {each.user.id === currentUser.id || currentUser.is_admin === true ? 
        <div id='deleteDiv'>
            <AiOutlineDelete onClick={()=> {handleDelete(each.id)}}/>
        </div> : null }
        <div id='starsDiv'>
            {stars.map(() => <p id='star'>★</p>)}
        </div>
        <h3 id='reviewContainerTitle'>{each.title}</h3>
        <p id='reviewContainerMessage'>{each.message}</p>
        <p>-{(each.user.name).split(" ").map((n)=>n[0]).join(".")} {each.is_verified === true ? <i id='reviewContainerVerified'>Verified client</i> : null}</p>
    </div>
    )
}


export default ReviewContainer