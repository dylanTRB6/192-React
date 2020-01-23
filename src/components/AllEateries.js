import React from 'react';  
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PlaceIcon from '@material-ui/icons/Place';

const AllEateries = (props) =>{
    var eateries = props.eateries.map((eatery)=>{
        return(
            <div key={eatery.id} className = "card">
                <div className = "content">
                    <Typography component="h3" variant="h3">{eatery.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <PhoneAndroidIcon/>{eatery.contact}
                    </Typography>
                    <p><PlaceIcon/>{eatery.address}</p>
                    {/* <h1>{eatery.name} | {eatery.rating}</h1>
                    <div className = "meta">{eatery.contact}</div>
                
                    <div className = "description">{eatery.address}</div> */}
                </div>
            </div>
        )
    })
    return(
        <div className = "ui cards">
            {eateries}
        </div>
    )
}

export default AllEateries;