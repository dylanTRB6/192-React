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

---OTHER INFO---
File creation date: 1/25/20
Development Group: Group 1 - RUPE
Client Group: Ma. Rowena C. Solamo
This component is for adding a review to a particular eatery.
This software's overall purpose is to provide a clean frontend for our system, RUPE.

---VARIABLES---
useStyles; used to apply styles
addReview; provides functionality to add a review to an eatery
formFields; contains the fields of the form

*/
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 200,
        margin: '2em 1em'
        }
    },
  }));

const AddReview = (props) =>{
    const [value, setValue] = React.useState(2);
    const classes=useStyles();
    let formFields = {}
    return (
            <form className ={classes.root} noValidate autoComplete="off" 
            onSubmit={(e)=> {props.handleReviewSubmit(formFields.review_text.value,
                value);
                e.target.reset();}}>
                <div className="field">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography>Rating</Typography>
                        <Rating name="pristine" value={value} 
                        onChange={(event, newValue) => {
                            setValue(newValue); 
                          }}
                        />
                    </Box>
                </div>
                <div className="field">
                    <TextField id="outlined-basic" 
                    multiline={true}
                    label="Leave a review" variant="outlined" 
                    inputRef={input => formFields.review_text = input}/>
                </div>     
                <button className="ui primary button"type="submit">Submit</button>           
            </form>
    )
}

export default AddReview;
