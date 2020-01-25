import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'
/* 
const buildings = [
    {
        value:
        label:
    }
]; */
const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 200,
      },
    },
  }));
const AddEatery = (props) =>{
    const classes=useStyles();
    let formFields = {}
    return (
        <form className ={classes.root} noValidate autoComplete="off" 
        onSubmit={(e)=> {props.handleEaterySubmit(formFields.name.value,
            formFields.address.value, 
            formFields.contact.value);
            e.target.reset();}}>
            <div className="field">
                <TextField id="outlined-basic" inputRef={input => formFields.name = input} label="Name" variant="outlined" />
                
                {/* <input ref={input => formFields.name = input} type="text" id="name" placeholder="Name" /> */}
            </div>
            <div className="field">
                <InputLabel>Address</InputLabel>
                <Select native className="form-control"id="select1" inputRef={input => formFields.address = input}>
                    <optgroup label="College of Engineering">
                        <option>Melchor Hall</option>
                        <option>Institute of Chemical Engineering</option>
                        <option>Institute of Civil Engineering</option>
                        <option>Electrical and Electronics Engineering Institute</option>
                        <option>Environmental and Energy Engineering Program</option>
                    </optgroup>
                
                    
                </Select>
            </div>
            <div className="field">
                <TextField
                    inputRef={input => formFields.contact = input}
                    id="outlined-number"
                    label="Contact No."
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                {/* <input ref={input => formFields.contact = input}type="text" id="contact" placeholder="Contact"/> */}
            </div>
            <button className="ui primary button"type="submit">Submit</button>

        </form>
    );
}

export default AddEatery;
