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
