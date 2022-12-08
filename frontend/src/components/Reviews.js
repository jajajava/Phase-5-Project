import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReviewContainer from "./ReviewContainer";

function Reviews({isSignedIn, currentUser}){



    const [reviews, setReviews] = useState([])
    const [inputHeader, setInputHeader] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [inputRating, setInputRating] = useState(NaN)
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)
    let mapBottom
    if(isSignedIn === true && currentUser.is_admin === false){ //If you have a form you don't need bottom: 0
        mapBottom = {bottom: 'auto'}
    } else {
        mapBottom = {bottom: 0}
    }


    useEffect(()=> {
        fetch("http://127.0.0.1:3000/reviews")
        .then(r => r.json())
        .then(r => {

            setReviews(r); 
            if(currentUser.requests?.find(each => each.status === 'completed')){
                setVerified(true)
            };
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
                is_verified: currentUser.is_verified,
                user_id: currentUser.id
              }
              ),
            })
            .then(res => {
                if(res.ok){
                    res.json().then(res => setReviews([...reviews, res]))
                    window.location.reload()
                } else {
                    res.json().then(setError(true))
                }
            })
            
        }
    console.log(reviews)

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


    console.log(verified)


    console.log(inputHeader, inputMessage, inputRating, currentUser.id)

    return(
        <div id="reviewsAll">
            <Header />
            <div id="reviewMap">
            {reviews.map(each => <ReviewContainer key={each.id} each={each} currentUser={currentUser} handleDelete={handleDelete} />)}
            {isSignedIn && currentUser.is_admin === false? 
            <form onSubmit={handleSubmit} id="reviewForm">
                <h1><i>Leave us a review!</i></h1>
                <label htmlFor="reviewHeader" className="reviewLabel">Header</label>
                <input onChange={handleInputHeader} id="reviewHeader" required></input>
                <label htmlFor="reviewMessage" className="reviewLabel">Review</label>
                <textarea onChange={handleInputMessage} id="reviewMessage" required></textarea>
                <label htmlFor="reviewRating" className="reviewLabel">Rate 1 - 5:</label>
                <input onChange={handleInputRating} type="number" id="reviewRating" name="reviewRating" min="1" max="5" required></input>
                <button>Post review</button>
                {error ? <h3>You have already posted a review!</h3>: null}
            </form>
            : null}

            <div id="reviewFooter" style={mapBottom} className="footer">
                <Footer />
            </div>

            </div>
        </div>
    )
}


export default Reviews