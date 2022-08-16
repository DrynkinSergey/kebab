import React, {useEffect, useRef, useState} from 'react';
import '../../styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {addOrder, addSingleOrder, setSummForDay} from "../../redux/slices/ordersSlice";
import {menu} from '../../redux/menu'
import CurrentOrder from "../CurrentOrder/CurrentOrder";
import ItemsList from "../ItemsList/ItemsList";

const App = () => {
    const dispatch = useDispatch();
    const [tempTotal, setTempTotal] = useState(1)
    const singleOrder = useSelector(state => state.order.singleOrder)
    const [value, setValue] = useState('')
    const myRef = useRef(null)
    const inputRef = useRef()
    const availableData = menu.map(item => item.searchPhrase)

    //find a number in string
    //getNum from str, if null - num === 1
    const findNumber = str =>  Number(str.match(/\d+/g)) || 1;
    const getName = str => {
       let spaceIndex = str.match(/ /);
        const noNumbers = str.replace(/[0-9]/g, '');
        return spaceIndex? str.slice(0,spaceIndex.index) : noNumbers.slice(0)
    }
    const search = (nameKey, myArray, count = 1) => {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i].searchPhrase === nameKey) {
                    return {...myArray[i], count}
                }
        }
    }

    const addOrderHandler = () => {
        dispatch(addOrder(tempTotal))
        dispatch(setSummForDay(tempTotal))
        myRef.current.scrollIntoView()
        inputRef.current.focus()
    }
    const addSingleOrderHandler = (e) => {
        if (e.key === 'Enter') {
            if(availableData.includes(getName(value))){
                dispatch(addSingleOrder(search(getName(value), menu, findNumber(value))))
            setValue('')
        }
            else setValue('')
        }
    }
    useEffect(() => {
        let res = singleOrder.reduce((prev, current) => prev + current.price * current.count
            , 0)
        setTempTotal(res)

    }, [singleOrder])

    return (
        <div className='wrapper'>
            <CurrentOrder total={tempTotal}/>
            <div className='addOrderForm'>

                <div style={{width: '100%'}}>
                    <div className='d-flex'>
                        <input ref={inputRef} placeholder='Введите заказ...' onKeyDown={(e)=>addSingleOrderHandler(e)} value={value}
                               onChange={(e) => setValue(e.currentTarget.value)}/>
                        <button disabled={!singleOrder.length} onClick={addOrderHandler}>Сохранить в заказы</button>
                    </div>

                </div>
            </div>
            <div style={{width: '100%'}}>
                <ItemsList/>
            </div>

            <br/>
            <footer ref={myRef}>

            </footer>
        </div>
    )
};

export default App;



