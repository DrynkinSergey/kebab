import React from 'react';
import {menu} from "../../redux/menu";

const NamesHint = () => {


    return (
        <div className='hint'>
            <h1>Сокращения</h1>
            <ul style={{color:'black'}}>
                {
                    menu.map((item,index) => <li key={index}>{item.searchPhrase} - {item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default NamesHint;
