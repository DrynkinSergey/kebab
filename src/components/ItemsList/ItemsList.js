import React from 'react';
import Item from "../Item/Item";
import {useSelector} from "react-redux";

const ItemsList = ({data}) => {
    const kebab = useSelector(state=>state)
    return (
        <ul>
            {kebab.map((item, i) => {
                    return (
                        <Item key={i}  name={item.name} price={item.price}/>
                    )
                }
            ).reverse()}
        </ul>
    )
};
export default ItemsList;