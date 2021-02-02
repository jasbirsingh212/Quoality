import React from 'react';
import {Link} from 'react-router-dom';
import profile from './../resources/profile.jpg';

const Dashboard = () => {
    return (
        <div className='dash'>
            <h1>Dashboard</h1>
            <div>
            <img src={profile} alt='profile'/>
            </div>

             <Link to='/home/search/invoices' >
                   <button> Invoices</button>
                </Link>
                <Link to='/home/search/items' >
                   <button >Items</button>
                </Link>
                <Link to='/home/search/client' >
                   <button> Client</button>
                </Link>
                <Link to='/home/search/payments' >
                    <button>Payments</button>
                </Link>
                <Link to='/home/search/notes' >
                    <button>Notes</button>
                </Link>
        </div>
    )
}

export default Dashboard;
