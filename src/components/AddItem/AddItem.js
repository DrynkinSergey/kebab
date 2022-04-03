/*
import React, {useState} from 'react';

const AddItem = (props) => {
        const [text, setText] = useState('');

        return (
            <form onSubmit={(e) => {
                props.onSubmit(e, text)
                setText('')
            }
            } className='addItem'>
                <input onChange={(e) => {
                    setText(e.target.value)
                }} type="text" placeholder='Enter something...' value={text}/>
                <button>Добавить
                </button>
            </form>
        )
    }
;

export default AddItem;*/

import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/store";

const AddItem = (props) => {
    const [state, setState] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(state));
        e.target.reset();
    }
        return (
            <form onSubmit={(e)=>handleSubmit(e)} className='addItem'>
                <input onChange={(e)=>{
                    setState(e.target.value)
                }} type="text" placeholder='Enter something...' />
                <button>Добавить
                </button>
            </form>
        )
    }
;

export default AddItem;
