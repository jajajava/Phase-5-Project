import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AiOutlineDelete } from "react-icons/ai"
import RequestContainer from "./RequestContainer";

function MyAccount({currentUser}){

    const token = localStorage.getItem('jwt')
    let name = `Welcome, ${currentUser.name.split(' ')[0]}`

    const [filteredUrgent, setFilteredUrgent] = useState([])
    const [filteredNotUrgent, setFilteredNotUrgent] = useState([])
    const [data, setData] = useState([])
    let variableStyle

    if (currentUser.review !== null){
        variableStyle = null
    } else {
        variableStyle = {top: '230px'}
    }


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
          })
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
            fetch('http://127.0.0.1:3000/show_mine', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(res => setData(res))

            // setData(currentUser.requests)
    } else {
      return 
    }
  }, [])

  useEffect(() => {
  if (data !== []){
    setFilteredUrgent((data.filter(each => each.is_urgent === true)).filter(each => each.status !== "completed"))
    setFilteredNotUrgent((data.filter(each => each.is_urgent === false)).filter(each => each.status !== "completed"))
}
},[data])


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
    // console.log(filteredUrgent, filteredNotUrgent)
    (data.filter(each => each.is_urgent === true))
    console.log(filteredUrgent, filteredNotUrgent)
    // console.log(data)

    return(
        <div id='myAccountAll'>

            <Header />
            <h1 id='welcome'>{name}</h1>


            {/* <div id="myAccountReservationHolder"> */}

            {/* vvv REVIEW START vvv */}
            {currentUser.is_admin === false && currentUser.review !== null ?
            <div id='myAccountReviewContainerAll'>
            <h2>Your review:</h2>
            <div id='myAccountReviewContainerInnerDiv'>
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
            </div>
            : null}
            {/* ^^^ REVIEW END ^^^ */}

            <div id='myAccountRequests' style={variableStyle}>
            {filteredUrgent || filteredNotUrgent !== [] ? <h2>Your service requests:</h2> : null}
            {data !== [] ? filteredUrgent.map((each)=> <RequestContainer currentUser={currentUser} each={each}/>) : null}
            {data !== [] ? filteredNotUrgent.map((each)=> <RequestContainer currentUser={currentUser} each={each} />) : null}
            <div className="footer">
                <Footer />
            </div>
        </div>
    </div>



        // </div>
    )
}

export default MyAccount