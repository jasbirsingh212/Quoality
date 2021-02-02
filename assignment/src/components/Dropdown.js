import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

class Drop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name} = this.props; 
        return (  
        <Dropdown  className={name} options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        )
    }
}
 
export default Drop;
