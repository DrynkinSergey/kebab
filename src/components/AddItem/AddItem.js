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

export default AddItem;