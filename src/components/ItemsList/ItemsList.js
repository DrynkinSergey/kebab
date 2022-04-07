import React from 'react';
import Item from "../Item/Item";
import {useSelector} from "react-redux";

const ItemsList = () => {
    const kebab = useSelector(state=>state)
    return (
        <ul>
            {kebab.map((item, i) => {
                    return (
                        <Item key={i} id={item.uniqId} extra={item.extra} count ={item.count} name={item.name} price={item.price}/>
                    )
                }
            ).reverse()}
        </ul>
    )
};
export default ItemsList;