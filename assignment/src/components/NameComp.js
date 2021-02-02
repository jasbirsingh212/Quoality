import React from 'react'

const NameComp = (props) => {

    const {name} = props;

    return (
        <div className='name'>
            <h3>{name}</h3>
            
        </div>
    )
}

export default NameComp
