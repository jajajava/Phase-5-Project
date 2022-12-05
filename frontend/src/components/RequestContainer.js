import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function RequestContainer({each}){


    return(
        <div id='requestContainerAll'>
            <p>{each.address}</p>
            {each.is_urgent === true ? <p>Is this an emergency: <strong>Yes</strong></p> : <p>Is this an emergency: <strong>No</strong></p>}
            {each.status}
            {/* <div id='deleteDiv'> CHANGE THE ID BC THE ICON IS TOO BIG */}
            <AiOutlineDelete/>
            {/* </div> */}
        </div>
    )
}

export default RequestContainer