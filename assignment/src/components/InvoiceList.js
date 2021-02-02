import React from 'react';
import data from './../resources/data/invoice';

const InvoiceList = (props) => {

    const {issuedate,DocNo,ClientName,Status,DueDate,Tax,Amount,DateofPayment,Balance,Drcr} = props;
    const onclick = (e) => {
        //e.preventDefault();
        console.log(e.target.name)
    }
    return (
        <div className='invoice-list'>
            <div className='btn-sec'>
                <a href='#' name="Edit" onClick={onclick}>Edit</a>
                <a href='#' name="Delete"onClick={onclick}>Delete</a>
                <a href='https://drive.google.com/file/d/14AIX6A4rkH-7ZfmiyXABsu0TkU5DK0ZP/view?usp=sharing'  name="Download" onClick={onclick} download>Download</a>
            </div>
            <div className='data-sec'>
                <p>{issuedate}</p>
                <p>{DocNo}</p>
                <p>{Status}</p>
                <p>{ClientName}</p>
                <p>{DueDate}</p>
                <p>{Tax}</p>
                <p>{Amount}</p>
                <p>{DateofPayment}</p>
                <p>{Balance}</p>
                <p>{Drcr}</p>
            </div>
        </div>
    )
}

export default InvoiceList;