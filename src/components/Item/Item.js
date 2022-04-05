import React from 'react';

const Item = ({name, price}) => {
    let classNames;
    (name !== null? classNames = 'item ' : classNames='item green')
        return (
            <li className={classNames}>
                <div className='name'> {name} </div>
                <div className='price'>{price}</div>
            </li>
        )
    }

;

export default Item;