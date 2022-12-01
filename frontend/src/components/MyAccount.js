import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function MyAccount({currentUser}){

    const token = localStorage.getItem('jwt')
    let name = `Welcome, ${currentUser.name.split(' ')[0]}`

    const [filteredUrgent, setFilteredUrgent] = useState([])
    const [filteredNotUrgent, setFilteredNotUrgent] = useState([])
    

    
        useEffect(()=>{
            if (currentUser.is_admin){
            fetch('http://127.0.0.1:3000/requests', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          } )
        .then(res => res.json())
        .then(res => res.filter(each => {
            if (each.is_urgent){
                setFilteredUrgent([...filteredUrgent, each]) //...filteredUrgent,
                // filteredUrgent.push(each)
            } else {
                // filteredNotUrgent.push(each)
                setFilteredNotUrgent([...filteredNotUrgent, each]) //...filteredNotUrgent,
            }
        }
        ))
        } else if (currentUser) {
        currentUser.requests.filter(each => {
            if (each.is_urgent){
                setFilteredUrgent([...filteredUrgent, each])
                // filteredUrgent.push(each)
            } else {
                setFilteredNotUrgent([...filteredNotUrgent, each])
                // filteredNotUrgent.push(each)
            }
            
        } )
    } else {
      return 
    }
  }, [])

    // let combined = filteredUrgent.concat(filteredNotUrgent)
    // console.log(combined)
    console.log(filteredUrgent, filteredNotUrgent)


    return(
        <div id='myAccountAll'>

            <Header />

            <div id="myAccountReservationHolder">
            <h1 id='welcome'>{name}</h1>
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