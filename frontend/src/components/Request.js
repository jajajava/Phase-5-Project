import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Request({currentUser}){

    const [resiJobs, setResiJobs] = useState([])
    const [commJobs, setCommJobs] = useState([])
    const [indJobs, setIndJobs] = useState([])
    const [jobSelection, setJobSelection] = useState(19)
    const [customInput, setCustomInput] = useState(null)
    const [address, setAddress] = useState('')
    const [isUrgent, setIsUrgent] = useState(false)

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/jobs')
        .then(res => res.json())
        .then(res => {
        setResiJobs(res.filter(each => each.category === 'residential'));
        setCommJobs(res.filter(each => each.category === 'commercial'));
        setIndJobs(res.filter(each => each.category === 'industrial'))

        
    })
    }, [])

    useEffect(()=> {
        if(jobSelection !== 19){
            setCustomInput(null)
        }
    }, [jobSelection])

    function handleJobSelector(e){
        setJobSelection(parseInt(e.target.value))
    }

    function handleAddressSelector(e){
        setAddress(e.target.value)
    }

    function handleIsUrgentSelector(e){
        if(e.target.value === "No"){
            setIsUrgent(false)
        } else {
            setIsUrgent(true)
        }
    }

    function handleCustomInput(e){
        setCustomInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://127.0.0.1:3000/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                address: address,
                is_urgent: isUrgent,
                job_id: jobSelection,
                custom: customInput

            }
            ),
            })
            .then(res => {
                if(res.ok){
                    res.json().then(res => console.log(res))
                } else {
                    res.json().then(res => console.log(res.error))
                }
            })
        }

    console.log(jobSelection, customInput, address, isUrgent)

    return(
        <div id="requestAll">
            <Header />
            <form onSubmit={handleSubmit} id='requestForm'>

                <label htmlFor='jobSelector' className="requestLabel">Select a job or <i> "other"</i></label>
                <select onChange={handleJobSelector} id='jobSelector' className="requestSelector">

                    <optgroup>
                        <option value={19}>Other</option>
                    </optgroup>

                    <optgroup label="Residential">
                        {resiJobs.map(each => <option value={each.id}>{each.task}</option>)}
                    </optgroup>

                    <optgroup label="Commercial">
                        {commJobs.map(each => <option value={each.id}>{each.task}</option>)}
                    </optgroup>

                    <optgroup label="Industrial">
                        {indJobs.map(each => <option value={each.id}>{each.task}</option>)}
                    </optgroup>

                </select>
                {jobSelection === 19?
                <>
                <label htmlFor='otherSelected' className="requestLabel">Please describe what job you need done:</label>
                <input onChange={handleCustomInput} id='otherSelected'></input> 
                </>
                : null}

                <label htmlFor='addressInput' className="requestLabel">Full address</label>
                <input onChange={handleAddressSelector} name='addressInput'></input>

                <label htmlFor='urgencyInput' className="requestLabel">Is the job an emergency?</label>
                <select onChange={handleIsUrgentSelector} id='urgencyInput' className="requestSelector">
                    <option>No</option>
                    <option>Yes</option>
                </select>

                <button>Submit request</button>

            </form>

            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}





export default Request