import React from 'react';
import '../stylesheets/Landing.css';
import Typography from '@material-ui/core/Typography'
export default function Landing() {
    return(
        <div className = 'Landing'>
            <div className='header'>
                <div className='text'>
                    <Typography component="h2" variant="h2">Find the best places to eat in UP Diliman.</Typography>
                    <Typography variant="subtitle1">Rate UP Eateries</Typography>
                </div>
                <div className='image'>
                    
                </div>
            </div>
        </div>
    )
}