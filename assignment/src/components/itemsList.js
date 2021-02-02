import React from 'react';

const pstyle = {
    margin :'15px 93px 10px 99px'
}

const ItemList = (props) => {

    const {Name,desc,type,price,unit} = props.data;
    const onclick = (e) => {
        //e.preventDefault();
        console.log(e.target.name)
    }
    return (
        <div className='invoice-list'>
            <div className='btn-sec'>
                <a href='#' name="Edit" onClick={onclick}>Edit</a>
                <a href='#' name="Delete"onClick={onclick}>Delete</a>
            </div>
            <div className='data-sec'>
                <p style={pstyle}>{Name}</p>
                <p style={pstyle}>{desc}</p>
                <p style={pstyle}>{type}</p>
                <p style={pstyle}>{price}</p>
                <p style={pstyle}>{unit}</p>
            </div>
        </div>
    )
}

export default ItemList;