import React from 'react';  
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PlaceIcon from '@material-ui/icons/Place';
import {
    Link,
    Switch,
    Route
  } from "react-router-dom";
import Eatery from './Eatery';

const AllEateries = (props) =>{
    var eateries = props.eateries.map((eatery)=>{
        console.log(eatery);
        return(
            <div key={eatery.id} className = "card">
                <div className = "content">
                    <Typography component={Link} 
                        to={"eatery/"+eatery.id} 
                        variant="h4" 
                        style={{textDecoration:'none'}} 
                        color="inherit">
                        {eatery.name}
                    </Typography>
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
            <Switch>
                <Route exact path="/eatery" render={()=>(<div>{eateries}</div>)}/>
                <Route path="/eatery/:id" component={Eatery}/>
             </Switch>
            {/* <Switch>
                <Route exact path = '${match.path}/all'><div>{eateries}</div> </Route>
            </Switch>  */}  
        </div>
    )
}

export default AllEateries;