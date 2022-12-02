import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReviewContainer from "./ReviewContainer";

function Reviews({isSignedIn, currentUser}){



    const [reviews, setReviews] = useState([])
    const [inputHeader, setInputHeader] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [inputRating, setInputRating] = useState(NaN)
    let mapBottom
    if(isSignedIn === true){
        mapBottom = null
    } else {
        mapBottom = 'mapBottomTrue'
    }


    useEffect(()=> {
        fetch("http://127.0.0.1:3000/reviews")
        .then(r => r.json())
        .then(r => {

            setReviews(r); 
            window.scrollTo({
            top: 0,
            behavior: "smooth"

        });
    })
    }, [])

    function handleInputHeader(e){
        setInputHeader(e.target.value)
    }

    function handleInputMessage(e){
        setInputMessage(e.target.value)
    }

    function handleInputRating(e){
        setInputRating(parseInt(e.target.value))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://127.0.0.1:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
              },
              body: JSON.stringify({
                stars: inputRating,
                title: inputHeader,
                message: inputMessage,
                user_id: currentUser.id
              }
              ),
            })
            .then(res => {
                if(res.ok){
                    res.json().then(res => setReviews([...reviews, res]))
                } else {
                    res.json().then(res => console.log(res.error))
                }
            })
        }

    console.log(inputHeader, inputMessage, inputRating, currentUser.id)


    return(
        <div id="reviewsAll">
            <Header />
            <div id="reviewMap" class={mapBottom}>
            {reviews.map(each => <ReviewContainer each={each}/>)}

            {isSignedIn? 
            <form onSubmit={handleSubmit} id="reviewForm">

                <label htmlFor="reviewHeader" className="reviewLabel">Header</label>
                <input onChange={handleInputHeader} id="reviewHeader"></input>
                <label htmlFor="reviewMessage" className="reviewLabel">Review</label>
                <textarea onChange={handleInputMessage} id="reviewMessage"></textarea>
                <label htmlFor="reviewRating" className="reviewLabel">Rate 1 - 5:</label>
                <input onChange={handleInputRating} type="number" id="reviewRating" name="reviewRating" min="1" max="5"></input>
                <button>Post review</button>
            </form>
            : null}


            <div className="footer">
                <Footer />
            </div>

            </div>
        </div>
    )
}



export default Reviews