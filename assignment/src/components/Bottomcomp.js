import React from 'react'
import Dropdown from './Dropdown';

let id =1;
const Bottomcomp = (props) => {

    const {name} = props;
    return (
        <div className='bottom'>
            <h4>{name}</h4>
            <div className="subhead">
                <h5>No</h5>
                <h5>Item Name</h5>
                <h5>Unit</h5>
                <h5>QTY</h5>
                <h5>Price</h5>
                <h5>Discount (%)</h5>
                <h5>Tax</h5>
                <h5>Total</h5>               
            </div>
             <div className='item-sec'>
                 <h6>{id++}</h6>
                 <Dropdown name='item'></Dropdown>
                 <Dropdown name='unit'></Dropdown>
                 <input type='number'/>
                 <input type='number'/>
                 <input type='number'/>
                 <Dropdown name='tax'></Dropdown>
                 <button>Add Line</button>
             </div>
                <textarea placeholder='Add Description' rows='11' cols='50'></textarea>
             <div className='button-sec'>
                 <button>Preview and Save</button>
                 <button>Save Draft</button>
                 <button>Cancel</button>
             </div>
        </div>
    )

}
setTimeout(()=> {console.log(id)},3000);
export default Bottomcomp
