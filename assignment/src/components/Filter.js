import React, { Component } from 'react'
import Popup from './Popup'
import SearchBar from './SearchBar'

class Filter extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    

    dropdown = (show) =>{
        this.setState({
            show:show
        })
    }


    handleClick = () => {
        const {show} = this.state;
        if(show){
            console.log("Hidedrop down")
           this.dropdown(false) 
        }
        else{
            console.log("Show dropdown")
            this.dropdown(true)
        }
    }

    render(){
        const {show} = this.state;

    return (
        <div className="navbar">
        <div className="dropdown">
        <button className="dropbtn" onClick={this.handleClick}>Filter Invoices
        </button>
        {show ? <Popup dropdown={this.dropdown}></Popup> : <></>}
        </div> 
        <SearchBar></SearchBar>
      </div>
    )
    }
}

export default Filter
