import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Landing from './Landing'
import Navbar from './Navbar';
import AddEatery from './AddEatery';
import AllEateries from './AllEateries';
class Main extends Component{
    constructor (props){
        super(props);
        this.state={
            eateries:[{id: 1, name: "Canteen", address:"Math Building", contact: "09134444444"},
            {id: 2, name: "Canteen", address:"Stat Building", contact: "09134444444"}]
        };
    }
    render(){
        return (
            <div className="Main">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/all-eateries">
                            <AllEateries eateries={this.state.eateries}/>
                        </Route>
                        <Route path="/add-eatery">
                            <AddEatery/>
                        </Route>
                    </Switch>
                    
                </Router>
            </div>
        )
    }
}
export default Main