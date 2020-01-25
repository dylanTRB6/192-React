import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PlaceIcon from '@material-ui/icons/Place';
import AllReviews from './AllReviews';
import AddReview from './AddReview';

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
                <Typography
                    variant="h4" 
                    color="inherit">
                    {eatery.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    <PhoneAndroidIcon/>{eatery.contact}
                </Typography>
                <p><PlaceIcon/>{eatery.address}</p>
                <AddReview handleReviewSubmit={this.handleReviewSubmit}/>
                <AllReviews reviews={this.state.reviews}/>
            </div>
        )
    }
  }
