import React from 'react'
import Filter from './Filter';
import {useLocation,Link} from 'react-router-dom';


const ContentHeader = () => {
    const location = useLocation();
    let New=location.pathname;
    let temp = New.substring(0,6);
    let comp=New.substring(13,20);
    let url=temp+comp+"/new/"+comp;

    return (
        <div className='contenthead'>
            <Filter></Filter>
            <div className='BtnSec'>
                <Link to={url}>
                <button>New</button>
                </Link>
                <button>Export</button>
                <button>Import</button>
            </div>
        </div>
    )
}

export default ContentHeader
