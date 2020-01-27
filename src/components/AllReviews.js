/* ---LICENSE---
Author: Annysia Dupaya
This is a course requirement for CS 192
Software Engineering II under the
supervision of Asst. Prof. Ma. Rowena C.
Solamo of the Department of Computer
Science, College of Engineering, University
of the Philippines, Diliman for the AY 2019-
2020 

---HISTORY---
1/25/20: Annysia Dupaya - Created component
1/26/20: Annysia Dupaya - Integrated with API
*/
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
const AllReviews = (props) =>{
    var reviews = props.reviews.map((review)=>{
        var stars = [];
        for (var i = 0; i < review.rating; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            stars.push(<StarIcon key={i} />);
        }
        return(<div key={review.id}>{stars}{review.review_text}</div>);
    })
    return(
        <div>
            <h2>Reviews</h2>
            {reviews}
        </div>
    )
}
export default AllReviews;
