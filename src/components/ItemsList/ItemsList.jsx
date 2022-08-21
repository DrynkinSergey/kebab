import React from 'react';
import {useSelector} from "react-redux";
import {removeOrder} from "../../redux/slices/ordersSlice";

const ItemList = ({dispatch}) => {

    const {orders} = useSelector(state => state.order);
    let items = orders.map((item, index) => {

        return (
            <div className='itemList show' key={item.id}  >
                <div onClick={()=>dispatch(removeOrder(item[0].id))}>Удалить</div>
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
