import React from 'react';  
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PlaceIcon from '@material-ui/icons/Place';
import Box from '@material-ui/core/Box';
import {
    Link,
    Switch,
    Route
  } from "react-router-dom";
import Eatery from './Eatery';
import StarIcon from '@material-ui/icons/Star';
import '../stylesheets/AllEateries.css';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';


const AllEateries = (props) =>{
    var eateries = props.eateries.map((eatery)=>{
        return(
            <Box key={eatery.id} className = 'eateryBox' border={1} borderColor={grey[300]}>
                <div className='subBox'>
                    <Typography component={Link} 
                        to={"eatery/"+eatery.id} 
                        variant="h5" 
                        style={{textDecoration:'none'}} 
                        color="inherit">
                        <strong>{eatery.name}</strong>
                    </Typography>
                    <p><PlaceIcon/>{eatery.address}</p>
                </div>
                <div className='subBox'>
                    <Typography variant="h5"><StarIcon style={{color:orange[500]}} fontSize='large'/>{eatery.rating}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <PhoneAndroidIcon/>{eatery.contact}
                    </Typography>
                </div>
                
            </Box>
        )
    })
    return(
        <div className = "ui cards">
            <Switch>
                <Route exact path="/eatery" render={()=>(<div className = 'eateriesContainer'>{eateries}</div>)}/>
                <Route path="/eatery/:id" component={Eatery}/>
             </Switch>
            {/* <Switch>
                <Route exact path = '${match.path}/all'><div>{eateries}</div> </Route>
            </Switch>  */}  
        </div>
    )
}

export default AllEateries;