import React, {useEffect, useRef, useState} from 'react';
import '../../styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {addOrder, addSingleOrder, setSummForDay} from "../../redux/slices/ordersSlice";
import {extra, menu} from '../../redux/menu'
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
    const availableExtra = extra.map(item => item.searchPhrase)

    //find a number in string
    //getNum from str, if null - num === 1
    const findNumber = str => Number(str.match(/\d+/g)) || 1;
    const getName = str => {
        let spaceIndex = str.match(/ /);
        const noNumbers = str.replace(/[0-9]/g, '');
        return spaceIndex ? noNumbers.slice(0, spaceIndex.index).trim() : noNumbers.slice(0)
    }
    const getExtra = str => {
        const noNum = str.replace(/[0-9]/g, '');
        let spaceIndex = noNum.match(/ /);
        return spaceIndex ? noNum.slice(spaceIndex.index + 1).trim().split('') : []
    }

    const search = (nameKey, myArray, count = 1) => {
        let res;
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].searchPhrase === nameKey) {
                res = {...myArray[i], price: myArray[i].price * count, count, extra: [...getExtra(value)]}
            }
        }
        let price2 = res.price
        let extra2 = res.extra

        for (let i=0;i<extra2.length;i++){
            for (let j=0;j<extra.length;j++){
                if(extra2[i]===extra[j].searchPhrase){
                    price2=price2 + (extra[j].price * res.count)
                }
            }
        }

        return {...res, price:price2};
    }

    const addOrderHandler = () => {
        dispatch(addOrder(tempTotal))
        dispatch(setSummForDay(tempTotal))
        myRef.current.scrollIntoView()
        inputRef.current.focus()
    }
    const addSingleOrderHandler = (e) => {
        if (e.key === 'Enter') {
            if (availableData.includes(getName(value))) {
                dispatch(addSingleOrder(search(getName(value), menu, findNumber(value))))
                setValue('')
            } else setValue('')
        }
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    useEffect(() => {
        let res = singleOrder.reduce((prev, current) => prev + current.price
            , 0)
        setTempTotal(res)

    }, [singleOrder])

    return (
        <div className='wrapper'>
            <CurrentOrder total={tempTotal}/>
            <div className='addOrderForm'>

                <div style={{width: '100%'}}>
                    <div className='d-flex'>
                        <input ref={inputRef} placeholder='Введите заказ...' onKeyDown={(e) => addSingleOrderHandler(e)}
                               value={value}
                               onChange={(e) => setValue(e.currentTarget.value.toLowerCase())}/>
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



