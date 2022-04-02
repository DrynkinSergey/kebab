import React from 'react';
import Item from "../Item/Item";

const ItemsList = ({data}) => {
    return (
        <ul>
            {data.map((item, i) => {
                    return (
                        <Item key={i} i={i + 1} name={item.name} price={item.price}/>
                    )
                }
            )}
        </ul>
    )
};
export default ItemsList;