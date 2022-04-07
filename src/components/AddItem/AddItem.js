import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/store";

const AddItem = () => {
    const [state, setState] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state){
            return;
        }
        dispatch(addItem(state))
        setState('')

    }
        return (
            <form onSubmit={(e)=>handleSubmit(e)} className='addItem'>
                <input  onChange={(e)=>{
                    setState(e.target.value)
                }} type="text" value={state} placeholder='Enter something...' />
                <button>Добавить
                </button>
            </form>
        )
    }
;

export default AddItem;
