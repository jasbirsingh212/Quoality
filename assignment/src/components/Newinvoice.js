import React from 'react'
import InvoiceDetails from './InvoiceDetails'
import NameComp from './NameComp'

const Newinvoice = () => {
    return (
        <div className='newinvoice'>
            <NameComp name='Add New Invoice'></NameComp>
            <InvoiceDetails></InvoiceDetails>
        </div>
    )
}

export default Newinvoice