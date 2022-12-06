import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { SlClose, SlCheck } from "react-icons/sl";

function RequestContainer({each, value, currentUser}){

    const [confirmation, setConfirmation] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [newStatus, setNewStatus] = useState('pending')

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

    function handleUpdateSubmit(){
        fetch(`http://127.0.0.1:3000/requests/${value}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              },
              body: JSON.stringify({
                status: newStatus
        })
        }
    )
    window.location.reload()
    }

    useEffect(()=>{
        if(showForm === false){
            setNewStatus(each.status)
        } else {
            setNewStatus('pending')
        }
    }, [showForm])

    return(
        <div id='requestContainerAll'>
            {each.job.id !== 19 ? <h2>{each.job.task}</h2> : <h2>{each.custom}</h2>}
            <p>{each.address}</p>
            {each.is_urgent === true ? <p>Is this an emergency: <strong>yes</strong></p> : <p>Is this an emergency: <strong>no</strong></p>}
            <p>Status: <strong>{each.status}</strong></p>
            {currentUser.is_admin === false ?
            <button className='requestContainerChanger' onClick={()=> {setConfirmation(true)}}>Cancel</button> 
            : <button className='requestContainerChanger' onClick={()=> setShowForm(!showForm)}>{showForm === false? 'Change status' : 'Cancel'}</button>
            }
            {confirmation === true ? 
            <div id="requestContainerConfirmation">
                <h2>Confirm cancelation</h2>
                <p>Your position in the service queue will be lost!</p>
                <SlClose onClick={()=> {setConfirmation(false)}} id='cancelConfirmation' className="confirmationButton"/>
                <SlCheck onClick={handleCancelation} id='confirmCancelation' className="confirmationButton"/>
            </div> 
            : null}
            {showForm === true ?
            <form onSubmit={handleUpdateSubmit} id='requestContainerAdminUpdateForm'>
            <select onChange={handleStatusInput}>
                <option value='pending'>Pending</option>
                <option value='approved'>Accept</option>
                <option value='denied'>Decline</option>
                <option value='completed'>Completed</option>
            </select>
            <button id="saveChanges" className='requestContainerChanger'>Save changes</button>
            </form>
            : null}
        </div>
    )
}

export default RequestContainer