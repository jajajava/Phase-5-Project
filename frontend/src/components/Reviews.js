import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReviewContainer from "./ReviewContainer";

function Reviews({isSignedIn}){

    const [reviews, setReviews] = useState([])
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    useEffect(()=> {
        fetch("http://127.0.0.1:3000/reviews")
        .then(r => r.json())
        .then(r => {setReviews(r)})
    }, [])
    console.log(reviews)


    return(
        <div id="reviewsAll">
            <Header />
            <div id="reviewMap">
            {reviews.map(each => <ReviewContainer each={each}/>)}

            {isSignedIn? 
            <form id="reviewForm">

                <label htmlFor="reviewHeader" className="reviewLabel">Header</label>
                <input id="reviewHeader"></input>
                <label htmlFor="reviewMessage" className="reviewLabel">Review</label>
                <textarea id="reviewMessage"></textarea>
                <label htmlFor="reviewRating" className="reviewLabel">Rate 1 - 5:</label>
                <input type="number" id="reviewRating" name="reviewRating" min="1" max="5"></input>
                <button>Post review</button>
            </form>
            : null}

            <div className="footer">
                <Footer />
            </div>

            </div>

            {/* <div className="footer">
                <Footer />
            </div> */}
        </div>
    )
}





export default Reviews