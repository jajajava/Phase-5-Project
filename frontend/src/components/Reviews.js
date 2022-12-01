import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReviewContainer from "./ReviewContainer";

function Reviews({isSignedIn}){



    const [reviews, setReviews] = useState([])
    const [inputHeader, setInputHeader] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [inputRating, setInputRating] = useState(NaN)


    useEffect(()=> {
        fetch("http://127.0.0.1:3000/reviews")
        .then(r => r.json())
        .then(r => {setReviews(r); 
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

    console.log(inputHeader, inputMessage, inputRating)


    return(
        <div id="reviewsAll">
            <Header />
            <div id="reviewMap">
            {reviews.map(each => <ReviewContainer each={each}/>)}

            {isSignedIn? 
            <form id="reviewForm">

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