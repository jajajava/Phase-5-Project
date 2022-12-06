import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { SlClose, SlCheck } from "react-icons/sl";

function RequestContainer({each}){
    
    const [confirmation, setConfirmation] = useState(false)

    console.log(confirmation)
    console.log(each.job)
    return(
        <div id='requestContainerAll'>
            {each.job.id !== 19 ? <h2>{each.job.task}</h2> : <h2>{each.custom}</h2>}
            <p>{each.address}</p>
            {each.is_urgent === true ? <p>Is this an emergency: <strong>yes</strong></p> : <p>Is this an emergency: <strong>no</strong></p>}
            <p>Status: <strong>{each.status}</strong></p>
            {/* <div id='deleteDiv'> CHANGE THE ID BC THE ICON IS TOO BIG */}
            <AiOutlineDelete id='requestContainerDelete' onClick={()=> {setConfirmation(true)}}/>
            {confirmation === true ? 
            <div className="modal">
                <h2>Confirm cancellation</h2>
                <p>Your position in the service queue will be lost!</p>
                <SlClose onClick={()=> {setConfirmation(false)}} id='cancelConfirmation' className="confirmationButton"/>
                <SlCheck id='confirmCancellation' className="confirmationButton"/>
            </div> 
            : null}
            {/* </div> */}
        </div>
    )
}

export default RequestContainer