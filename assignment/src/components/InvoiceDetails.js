import React from 'react'
import Bottomcomp from './Bottomcomp';
import DatePicker from './Datepicker';
import Dropdown from './Dropdown';

const InvoiceDetails = () => {

    const handleChange = ( ) => {
        console.log("change occcured");
    }

    return (
        <div className='invoice-details'>
            <div className='details'>
                <div className='details-client'>
                <label> Client Name</label>
                <Dropdown name='select-client'></Dropdown>
                <label >Type of Invoice</label>
                <Dropdown name='type'></Dropdown>
                </div>
                <div className='detail-1'>
                    <div className='sub-details'>
                        <div className='invoice-no'>
                            <h6>Invoice No</h6>
                            <input placeholder=''/>
                        </div>
                        <div className='invoice-date'>
                            <h6>Invoice Date</h6>
                            <DatePicker onChange={handleChange}/>
                        </div>
                        <div className = "Due-date">
                            <h6>Due Date</h6>
                            <DatePicker onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='sub-details'>
                        <div className='invoice-no'>
                            <h6>P Order No</h6>
                            <input placeholder=''/>
                        </div>
                        <div className='invoice-date'>
                            <h6>P Order Date</h6>
                            <DatePicker onChange={handleChange}/>
                        </div>
                        <div className='invoice-date'>
                            <h6>Payments Terms</h6>
                            <Dropdown name='mydrop'></Dropdown>
                        </div>
                    </div>
            </div>
            </div>
            <div className='description'>
                <Bottomcomp name="Invoices"></Bottomcomp>
            </div>
        </div>
    )
}

export default InvoiceDetails
