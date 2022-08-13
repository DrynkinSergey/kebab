import React, {useEffect, useState} from 'react';
import '../../styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {addOrder, addSingleOrder, addToTempOrder, setTotal} from "../../redux/slices/ordersSlice";
import {menu} from '../../redux/menu'

const App = () => {
    const dispatch = useDispatch();
    const [tempOrders, setTempOrders] = useState([])
    const [tempTotal, setTempTotal] = useState(0)
    const orders = useSelector(state => state.order.orders)
    const singleOrder = useSelector(state => state.order.singleOrder)
    const [name,setName] = useState({})


    function search(nameKey, myArray,count){
        for (let i=0; i < myArray.length; i++) {
            if (myArray[i].searchPhrase === nameKey) {
                return({
                    name:myArray[i].name,
                    count,
                    price: 90*count,
                    extra: 'chease',
                })
            }
        }
    }




    const addOrderHandler = () => {
        dispatch(addOrder(tempTotal))

    }
    const addSingleOrderHandler = async () => {
       setName(await search('kur', menu,3)) ;

        dispatch(addSingleOrder(name))

    }
    useEffect(() => {
        let res = singleOrder.reduce((prev,current) => prev+current.price
            ,0)
        setTempTotal(res)

    }, [singleOrder])

    return (
        <div className='wrapper'>
            <input  onChange={(e)=> setName(e.currentTarget.value)}/>
            <div style={{width:'100%'}}>
                <button onClick={addSingleOrderHandler}>Добавить заказ</button>
                <button onClick={addOrderHandler}>Сохранить в заказы</button>
                {
                    orders.map((item,index) => {
                        return(
                            <div className='itemList' key={item}>
                            <p>{index+1}.</p>
                        {item.map((obj,index) =>
                            <div className='item' key={index}>
                            <>
                                {obj.name&&<span>{obj.name}</span>}
                                {obj.price&&<span>{obj.price}</span>}
                                {obj.count&&<span>{obj.count}</span>}
                                </>
                                {obj.total&&<span className='itemPrice'>Сумма заказа: {obj.total}</span>}
                                <br/>
                            </div>)

                        }
                            </div> ) })
                }
            </div>
            <br/>

        </div>
    )
};

export default App;



