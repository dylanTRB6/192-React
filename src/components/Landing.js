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
1/20/20: Annysia Dupaya - Created component
1/22/20: Annysia Dupaya - Added some styling
*/
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