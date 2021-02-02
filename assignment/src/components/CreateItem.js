import React, { Component } from 'react';
import Bottomcomp from './Bottomcomp'

class CreatItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            Desc:'',
            type:'',
            price:'',
            unit:'',
            qty:'',
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
        const {name, Desc, type, price, unit, qty} = this.state;
        return ( 
            <div className='new-item'>
            <h3>Add New Item</h3>
            <form onSubmit={this.onSubmit}>
            <div className='item-input'>
                <label>Name</label>
                <input placeholder=' Enter Name'  name='name' value={name} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Desc</label>
                <input placeholder='Enter Description'  name='Desc' value={Desc} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Type</label>
                <input placeholder='Enter Type' name='type' value={type} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Price</label>
                <input  type='number' placeholder='Enter Price' name='price' value={price} onChange={this.onChange}/>
            </div>
            <div className='item-input'>
                <label>Unit</label>
                <input type='number' placeholder=' Enter Unit' name='unit' value={unit} onChange={this.onChange}/>
            </div>
            </form>
            <button  onClick={this.onSubmit} >Submit</button>
        </div>
         );
    }
}
 
export default CreatItem;

