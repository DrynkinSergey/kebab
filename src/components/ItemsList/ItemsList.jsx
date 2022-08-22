import React from 'react';
import {useSelector} from "react-redux";
import {removeOrder} from "../../redux/slices/ordersSlice";

const ItemList = ({dispatch}) => {

    const {orders} = useSelector(state => state.order);
    let items = orders.map((item, index) => {

        return (
            <div className='itemList show' key={item.id}  >
                <div className='deleteBtn'>
                    <svg onClick={()=>dispatch(removeOrder(item[0].id))} width='30' viewBox="-0.5 0 20 19.84" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
                    </svg></div>

                <span style={{color: 'black', fontWeight: 'bold'}}>Заказ №{index + 1}.</span>
                {item.map((obj, index) =>
                    <div className='item' key={obj.id}>

                            {obj.name && <span>{obj.name}</span>}
                            {obj.id && ''}
                            {obj.price && <span className='extra'>{obj.extra.map(item => `${item} `)}</span>}
                            {obj.count && <span>{obj.count}</span>}
                            {obj.price && <span>{obj.price}</span>}
                        {obj.total && <span className='itemPrice'>{obj.total} грн.</span>}


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
