import React, {useEffect, useRef, useState} from 'react';
import '../../styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {addOrder, addSingleOrder, addToTempOrder, setSummForDay, setTotal} from "../../redux/slices/ordersSlice";
import {menu} from '../../redux/menu'
import CurrentOrder from "../CurrentOrder/CurrentOrder";
import ItemsList from "../ItemsList/ItemsList";

const App = () => {
    const dispatch = useDispatch();
    const [tempTotal, setTempTotal] = useState(1)
    const singleOrder = useSelector(state => state.order.singleOrder)
    const [value,setValue] = useState('')
    const myRef = useRef(null)


    const search =  (nameKey, myArray,count=1) =>{
        for (let i=0; i < myArray.length; i++) {
            if (myArray[i].searchPhrase === nameKey) {
                return {...myArray[i], count}
            }
        }
    }

    const addOrderHandler = () => {
        dispatch(addOrder(tempTotal))
        dispatch(setSummForDay(tempTotal))
        myRef.current.scrollIntoView()
    }
    const addSingleOrderHandler =  () => {
        dispatch(addSingleOrder(search(value,menu)))
    }
    useEffect(() => {
        let res = singleOrder.reduce((prev,current) => prev+current.price*current.count
            ,0)
        setTempTotal(res)

    }, [singleOrder])

    return (
        <div className='wrapper'>
            <CurrentOrder total={tempTotal}/>
           <div className='addOrderForm'>

               <div style={{width:'100%'}}>
                   <div className='d-flex'>
                       <input placeholder='Введите заказ...' value={value} onChange={(e)=> setValue(e.currentTarget.value)}/>
                       <button disabled={!value} onClick={addSingleOrderHandler}>Добавить заказ</button>
                       <button disabled={!singleOrder.length} onClick={addOrderHandler}>Сохранить в заказы</button>
                   </div>

               </div>
           </div>
            <div style={{width:'100%'}}>
            <ItemsList/>
                </div>

            <br/>
            <footer ref={myRef}>

            </footer>
        </div>
    )
};

export default App;



