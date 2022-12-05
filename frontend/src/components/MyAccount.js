import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AiOutlineDelete } from "react-icons/ai"

function MyAccount({currentUser}){

    const token = localStorage.getItem('jwt')
    let name = `Welcome, ${currentUser.name.split(' ')[0]}`

    const [filteredUrgent, setFilteredUrgent] = useState([])
    const [filteredNotUrgent, setFilteredNotUrgent] = useState([])

    let stars = []
    if (currentUser.review !== null){
    for(let i=0; i < currentUser.review.stars; i++){
        stars.push('x')
    }
}

        useEffect(()=>{
            if (currentUser.is_admin === true){
            fetch('http://127.0.0.1:3000/requests', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          } )
        .then(res => res.json())
        .then(res => res.filter(each => {
            if (each.is_urgent){
                setFilteredUrgent([...filteredUrgent, each])
            } else {
                setFilteredNotUrgent([...filteredNotUrgent, each])
            }
        }
        ))
        } else if (currentUser.is_admin === false) {
        currentUser.requests.filter(each => {
            if (each.is_urgent){
                setFilteredUrgent([...filteredUrgent, each])
            } else {
                setFilteredNotUrgent([...filteredNotUrgent, each])
            }
            
        } )
    } else {
      return 
    }
  }, [])

  function handleDelete(e){
    fetch(`http://127.0.0.1:3000/reviews/${e}`, {
        method: 'DELETE',
        headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }}
    )
    window.location.reload()
}

    // let combined = filteredUrgent.concat(filteredNotUrgent)
    // console.log(combined)
    console.log(filteredUrgent, filteredNotUrgent)


    return(
        <div id='myAccountAll'>

            <Header />
            <h1 id='welcome'>{name}</h1>


            <div id="myAccountReservationHolder">

            {/* vvv REVIEW START vvv */}
            {currentUser.is_admin === false && currentUser.review !== null ?
            <div style={{marginLeft: 0}} id='myAccountReviewContainerAll'>
                <div id='deleteDiv'>
                    <AiOutlineDelete onClick={()=> {handleDelete(currentUser.review.id)}}/>
                </div>
            <div id='starsDiv'>
                {stars.map(() => <p id='star'>★</p>)}
            </div>
                <h3 id='reviewContainerTitle'>{currentUser.review.title}</h3>
                <p id='reviewContainerMessage'>{currentUser.review.message}</p>
                <p>-{(currentUser.name).split(" ").map((n)=>n[0]).join(".")}</p>
            </div>

            : null}
            {/* ^^^ REVIEW END ^^^ */}
            <p>Urgent</p>
            {filteredUrgent.map(each => <li key={each.id} style={{color:'blue'}}className='filteredUrgentAddress'>{each.address}</li>)}
            <p>Regular</p>
            {filteredNotUrgent.map(each => <li key={each.id} style={{color:'blue'}}className='filteredNotUrgentAddress'>{each.address}</li>)}
            </div>

            <div className="footer">
            <Footer />
            </div>

        </div>
    )
}

export default MyAccount