import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PlaceIcon from '@material-ui/icons/Place';
import AllReviews from './AllReviews';
import AddReview from './AddReview';
import Box from '@material-ui/core/Box';
import '../stylesheets/Eatery.css';
import StarIcon from '@material-ui/icons/Star';

export default class Eatery extends Component {
    constructor(props){
        super(props);
        this.state={
            eatery:[],
            reviews:[]
        };
        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
        this.addNewReview = this.addNewReview.bind(this)
    }
    handleReviewSubmit(review_text, rating){
        let body = {review_text:review_text, rating:rating};
        console.log(review_text);
        fetch('http://localhost:5000/eatery/'+this.props.match.params.id+'/review/add',{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body)
        }).then((response)=>{return response.json()})
        .then((review)=>{
            this.addNewReview(review)
        })
    }
    addNewReview(review){
        this.setState({
            reviews: this.state.reviews.concat(review)
        })
    }
    componentDidMount(){
        fetch('http://localhost:5000/eatery/'+this.props.match.params.id)
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ eatery: data }) });
        fetch('http://localhost:5000/eatery/'+this.props.match.params.id+'/review')
        .then((response)=> {return response.json()})
        .then((data) => {this.setState({reviews: data})});
    }
    render() {
        let eatery = this.state.eatery;
        return(
            <div>
                <div className='container'>
                    <Box className='subBox'>
                        <Typography
                            variant="h2" 
                            color="inherit">
                            {eatery.name} <StarIcon fontSize='large'/> {eatery.rating}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <PhoneAndroidIcon/>{eatery.contact}
                        </Typography>
                        <p><PlaceIcon/>{eatery.address}</p>
                    </Box>
                    <Box className='subBox right'>
                        <Typography
                            variant="h4" 
                            color="inherit">
                        Add a Review
                        </Typography>
                        <AddReview handleReviewSubmit={this.handleReviewSubmit}/>
                    </Box>
                </div>
                <AllReviews reviews={this.state.reviews}/>
            </div>
        )
    }
  }
