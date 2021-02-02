import React from 'react'
import Bottomcomp from './Bottomcomp'
import {Link} from 'react-router-dom';
import items from './../resources/data/Items';
import ItemList from './itemsList';

const Items = () => {
    return (
        <div className="items">
            <div className="subhead">
                <h5>Name</h5>
                <h5>Description</h5>
                <h5>Type</h5>
                <h5>Price</h5>
                <h5>Unit</h5>             
            </div>
            <>
            {
                items.map((d,index) => {
                    return <ItemList key={index} data={d} style={{margin :'15px 93px 10px 99px'}}></ItemList>
                })
            }
            </>
            <h2>Billing without items? Might be hard... </h2>
            <p>Add your products or services from here. Have them stored somewhere? You can easily import them using the supplied template.</p>
            <Link to='/home/items/new/items'>
            <button>Create New Items</button>
            </Link>
        </div>
    )
}

export default Items