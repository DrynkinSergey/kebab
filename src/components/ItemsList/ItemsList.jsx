import React from 'react';
import {useSelector} from "react-redux";

const ItemList = ({id}) => {
    const {orders} = useSelector(state => state.order);
    let items = orders.map((item, index) => {
        return (
            <div className='itemList show' key={id}>
                <span style={{color: 'black', fontWeight: 'bold'}}>Заказ №{index + 1}.</span>
                {item.map((obj, index) =>
                    <div className='item' key={id}>
                        <>
                            {obj.name && <span>{obj.name}</span>}
                            {obj.price && <span className='extra'>{obj.extra.map(item => `${item} `)}</span>}

                            {obj.count && <span>{obj.count}</span>}
                            {obj.price && <span>{obj.price}</span>}

                        </>
                        {obj.total && <span className='itemPrice'>{obj.total} грн.</span>}
                        <br/>
                    </div>)
                }
            </div>)
    })
    if (orders.length === 0) {
        return <h1 style={{margin: '0 auto', textAlign: 'center'}}>Заказов нет</h1>
    }
    return (
        <div>
            {items}
        </div>
    );
};

export default ItemList;
