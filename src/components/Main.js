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
1/20/20: Annysia Dupaya - Created component, linked with other components
1/25/20: Annysia Dupaya - Integrated API*/
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Landing from './Landing'
import Navbar from './Navbar';
import AddEatery from './AddEatery';
import AllEateries from './AllEateries';
import Footer from './Footer';
class Main extends Component{
    constructor (props){
        super(props);
        this.state={
            eateries:[]
        };
        this.handleEaterySubmit = this.handleEaterySubmit.bind(this)
        this.addNewEatery = this.addNewEatery.bind(this)
    }
    handleEaterySubmit(name, address, contact){
        console.log("name: "+name + " address:" + address + " contact: " + contact)
        let body = {name:name, address:address, contact:contact};
        fetch('http://localhost:5000/eatery/add',{
            method: 'POST',
            body: JSON.stringify(body)

        }).then((response)=>{return response.json()})
        .then((eatery)=>{
            this.addNewEatery(eatery)
        })
    }
    addNewEatery(eatery){
        this.setState({
            eateries: this.state.eateries.concat(eatery)
        })
    }
    componentDidMount(){
        fetch('http://localhost:5000/eatery')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ eateries: data }) });
    }
    render(){
        return (
            <div className="Main">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/eatery">
                            <AllEateries eateries={this.state.eateries}/>
                        </Route>
                        <Route path="/add-eatery">
                            <AddEatery handleEaterySubmit={this.handleEaterySubmit}/>
                        </Route>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
export default Main