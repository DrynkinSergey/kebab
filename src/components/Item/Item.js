import React, {useEffect} from 'react';
import {removeTodo} from "../../redux/store";
import {useDispatch} from "react-redux";

const Item = ({name, price,count, extra,id}) => {
    const dispatch = useDispatch()
    const showCount = (count >1? `x${count}` : ' ');
    let  a = (extra)?
         Object.values(extra).join(' '):null
    useEffect(() =>
        () => console.log("unmount"), []);


    let classNames;
    (name !== null? classNames = 'item ' : classNames='item green')
        return (
            <li className={classNames}>
                <div className='name'> {name} {showCount}  {a} </div>
                <div className='price'>{price}</div>
                <button className='del' onClick={ ()=>
                {
                    if(window.confirm('Удалить позицию?')){
                                dispatch(removeTodo(id))}
                    }
                }>x</button>
            </li>
        )
    }

;

export default Item;