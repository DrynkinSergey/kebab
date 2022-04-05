import React from 'react';

const Item = ({name, price, i}) => {

        return (
            <li className='item'>
                <div className='name'> {name} </div>
                <div className='price'>{price}</div>
            </li>
        )
    }

;

export default Item;