import React, { Component } from 'react';


class CreateClient extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companyname:'',
            contactname:'',
            balance:'',
            city:'',
            email:'',
            phone:'',
         }
    }

    display=() => {
        console.log(this.state);
    }

    onChange = (event) => {
        const val =event.target.value;
        const key= event.target.name;
      
        this.setState({...this.state, [key]: val});
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        console.log("sumitted");
    }


    render() { 
        const {companyname, contactname, balance, city, email, phone} = this.state;
        return ( 
            <div className='new-item'>
            <h3>Add New Client</h3>
            <form onSubmit={this.onSubmit}>
            <div className='item-input'>
                <label>Comp. Name</label>
                <input placeholder=' Enter Company Name'  name='companyname' value={companyname} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Contact Name</label>
                <input placeholder='Enter Contact Name'  name='contactname' value={contactname} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Balance</label>
                <input placeholder='Enter Balance' name='balance' value={balance} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>City</label>
                <input placeholder='Enter City' name='city' value={city} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Email</label>
                <input type='email' placeholder=' Enter Email' name='email' value={email} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Phone</label>
                <input  placeholder=' Enter Phone' name='phone' value={phone} onChange={this.onChange}/>
            </div>
            </form>
            <button  onClick={this.onSubmit} >Submit</button>
        </div>
         );
    }
}
 
export default CreateClient;


