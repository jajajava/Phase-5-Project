import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function RequestContainer({each}){

    console.log(each.job)
    return(
        <div id='requestContainerAll'>
            {each.job.id !== 19 ? <h2>{each.job.task}</h2> : <h2>{each.custom}</h2>}
            <p>{each.address}</p>
            {each.is_urgent === true ? <p>Is this an emergency: <strong>yes</strong></p> : <p>Is this an emergency: <strong>no</strong></p>}
            <p>Status: <strong>{each.status}</strong></p>
            {/* <div id='deleteDiv'> CHANGE THE ID BC THE ICON IS TOO BIG */}
            <AiOutlineDelete/>
            {/* </div> */}
        </div>
    )
}

export default RequestContainer