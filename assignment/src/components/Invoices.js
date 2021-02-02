import React from 'react'
import flow from './../resources/data/flow.svg'
import {Link} from 'react-router-dom';
import Invoice from './../resources/data/invoice';
import InvoiceList from './InvoiceList';

const Invoices = () => {

    return (
        <div className="invoices">
            <div className="subhead">
                <h5>Issue Date</h5>
                <h5>Doc. No.</h5>
                <h5>Status</h5>
                <h5>Client Name</h5>
                <h5>Due Date</h5>
                <h5>Tax</h5>
                <h5>Amount</h5>
                <h5>Date of Payment</h5>
                <h5>Balance</h5>
                <h5>Dr/Cr</h5>                
            </div>
            <>
            {
                Invoice.map((d,Index) => {
                     return <InvoiceList key={Index} issuedate={d.issuedate} DocNo={d.DocNo} ClientName={d.ClientName} Status={d.Status} DueDate={d.DueDate} Tax={d.Tax} Amount={d.Amount} DateofPayment={d.DateofPayment} Balance={d.Balance} Drcr={d.Drcr} />
                })
            }
            </>
            <h2>Your clients will love your new invoices!</h2>
            <p>Sending amazing invoices and getting paid is easier than ever. Try our optimized templates and delivery system.</p>
           <Link to='/home/invoice/new/invoice'>
               <button>Create New Invoices</button>
            </Link> 
            <div>
            <h1>Lifecycle of an Invoice</h1>
            <img src={flow} alt='flow'/>
            </div>
        </div>
    )
}

export default Invoices