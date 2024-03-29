import React from 'react';
import {useSelector} from "react-redux";

const CurrentOrder = ({total}) => {
    const {singleOrder} = useSelector(state => state.order)

    return (
        <div className={singleOrder.length === 0 ? 'currentOrderWrapper hidden' : 'currentOrderWrapper visible'}>
            <h1>Текущий заказ:</h1>
            {singleOrder.map((item, index) => {
                return <div key={index} className='currentOrder'>
                    <span className='name'>{item.name}</span>
                    <span>{item.extra.map(item => `${item} `)}</span>
                    <span className='countPos'>{item.count}</span>
                    <span className='price'>{item.price}</span>
                </div>
            })}
            <h2>{total}</h2>
        </div>
    );
}

export default CurrentOrder;
