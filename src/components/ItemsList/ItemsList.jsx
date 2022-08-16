import React from 'react';
import {useSelector} from "react-redux";

const ItemList = () => {
    const {orders} = useSelector(state => state.order);

    let items = orders.map((item, index) => {
        return (
            <div className='itemList show' key={item}>
                <span style={{color:'black', fontWeight:'bold'}}>Заказ №{index + 1}.</span>
                {item.map((obj, index) =>
                    <div className='item' key={index}>
                        <>
                            {obj.name && <span>{obj.name}</span>}
                            {obj.price && <span className='extra'>{obj.extra.map(item => `${item} `)}</span>}

                            {obj.count && <span>{obj.count}</span>}
                            {obj.price && <span>{obj.price} грн.</span>}

                        </>
                        {obj.total && <span className='itemPrice'>Сумма заказа: {obj.total} грн.</span>}
                        <br/>
                    </div>)
                }
            </div>)
    })

    return (
        <div>
            {items}
        </div>
    );
};

export default ItemList;
