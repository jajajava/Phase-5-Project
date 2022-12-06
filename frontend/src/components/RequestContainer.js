import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { SlClose, SlCheck } from "react-icons/sl";

function RequestContainer({each, value, currentUser}){

    const [confirmation, setConfirmation] = useState(false)
    const [statusSelect, setStatusSelect] = useState(false)
    const [newStatus, setNewStatus] = useState(each.status)

    function handleCancelation(){
        fetch(`http://127.0.0.1:3000/requests/${value}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              },
              body: JSON.stringify({
                status: 'canceled'
        })
        }
    )
    window.location.reload()
}

    function handleChangeStatus(){
        
    }

    function handleStatusInput(e){
        setNewStatus(e.target.value)
    }
    //     fetch(`http://127.0.0.1:3000/requests/${value}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    //           },
    //           body: JSON.stringify({
    //             status: newStatus
    //     })
    //     }
    // )
    // window.location.reload()

console.log(newStatus)

    return(
        <div id='requestContainerAll'>
            {each.job.id !== 19 ? <h2>{each.job.task}</h2> : <h2>{each.custom}</h2>}
            <p>{each.address}</p>
            {each.is_urgent === true ? <p>Is this an emergency: <strong>yes</strong></p> : <p>Is this an emergency: <strong>no</strong></p>}
            <p>Status: <strong>{each.status}</strong></p>
            {currentUser.is_admin === false ?
            <button id='requestContainerDelete' onClick={()=> {setConfirmation(true)}}>Cancel</button> 
            : <button onClick={()=> {setNewStatus(each.status); setStatusSelect(!statusSelect)}}>{statusSelect === false? 'Change status' : 'Cancel'}</button>
            }
            {confirmation === true ? 
            <div id="requestContainerConfirmation">
                <h2>Confirm cancelation</h2>
                <p>Your position in the service queue will be lost!</p>
                <SlClose onClick={()=> {setConfirmation(false)}} id='cancelConfirmation' className="confirmationButton"/>
                <SlCheck onClick={handleCancelation} id='confirmCancelation' className="confirmationButton"/>
            </div> 
            : null}
            {statusSelect === true ?
            <form id='requestContainerAdminUpdateForm'>
            <select onChange={handleStatusInput}>
                <option value='pending'>Pending</option>
                <option value='approved'>Accept</option>
                <option value='denied'>Decline</option>
                <option value='completed'>Completed</option>
            </select>
            <button>Save changes</button>
            </form>
            : null}
        </div>
    )
}

export default RequestContainer