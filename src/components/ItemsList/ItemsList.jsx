import React from 'react';
import {useSelector} from "react-redux";

const ItemList = () => {
    const {orders} = useSelector(state => state.order);

   let items =orders.map((item,index) => {
        return (
            <div className='itemList' key={item}>
                <span>Заказ №{index+1}.</span>
                {item.map((obj,index) =>
                    <div className='item' key={index}>
                        <>
                            {obj.name&&<span>{obj.name}</span>}
                            {obj.price&&<span>{obj.price}</span>}
                            {obj.count&&<span>{obj.count}</span>}
                        </>
                        {obj.total&&<span className='itemPrice'>Сумма заказа: {obj.total}</span>}
                        <br/>
                    </div>)
                }
            </div> ) })

    return (
        <div>
            {items}
        </div>
    );
};

export default ItemList;
