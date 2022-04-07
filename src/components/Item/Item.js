import React from 'react';

const Item = ({name, price,count, extra}) => {
    const showCount = (count >1? `x${count}` : ' ');
    let  a = (extra)?
         Object.values(extra).join(' '):null

    let classNames;
    (name !== null? classNames = 'item ' : classNames='item green')
        return (
            <li className={classNames}>
                <div className='name'> {name} {showCount}  {a} </div>
                <div className='price'>{price}</div>
            </li>
        )
    }

;

export default Item;