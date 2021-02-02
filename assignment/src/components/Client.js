import React from 'react'
import {Link} from 'react-router-dom';

const Client = () => {
    return (
        <div className='client'>
            <div className="subhead">
                <h5>Company Name</h5>
                <h5>Contact Name</h5>
                <h5>Balance</h5>
                <h5>City</h5>
                <h5>Email</h5>
                <h5>Phone</h5>             
            </div>
            <h2>Business without clients isn't easy. </h2>
            <p>Create and manage your contacts, all in one place.</p>
            <Link to='/home/client/new/client'>
            <button>Create New Clients</button>
            </Link>
        </div>
    )
}

export default Client
