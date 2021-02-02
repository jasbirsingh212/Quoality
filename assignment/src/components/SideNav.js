import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const SideNav = () => {
    return (
        <div className='sidenav'>
            <div className='dashboard'>
                <Link to='/home/' className='navlink'>
                    Dashboard
                </Link>
            </div>
            <div className='dashboard'>
                <Link to='/home/search/invoices' className='navlink'>
                    Invoices
                </Link>
            </div>
            <div className='dashboard'>
                <Link to='/home/search/items' className='navlink'>
                    Items
                </Link>
            </div>
            <div className='dashboard'>
                <Link to='/home/search/client' className='navlink'>
                    Client
                </Link>
            </div>
            <div className='dashboard'>
                <Link to='/home/search/payments' className='navlink'>
                    Payments
                </Link>
            </div>
            <div className='dashboard'>
                <Link to='/home/search/notes' className='navlink'>
                    Notes
                </Link>
            </div>
        </div>
    )
}

export default SideNav
