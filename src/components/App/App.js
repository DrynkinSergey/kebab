import '../../index.css'

import {useEffect, useState} from "react";
import ItemsList from "../ItemsList/ItemsList";
import AddItem from "../AddItem/AddItem";


function App() {
    const initialState = {
        countItems: 2,
        items: [
            {
                id: 1,
                name: 'Куринная',
                price: 85,
                count: 0
            },
        ]
    }


    const [state, setState] = useState(initialState);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        state.items.map(item => {
            setSum(sum + item.price)
        })
    }, []);
    useEffect(() => {
        state.items.map(item => {
            setSum(sum + item.price)
        })
    }, [state.items.length]);


    const onSubmit = (e, text) => {
        e.preventDefault();
        let item;
        switch (text) {

            case 'к':
                item = {
                    id: 1,
                    name: 'Куринная',
                    price: 85,
                    count: 0
                }
                break

            case 'кс':
                item = {
                    id: 1,
                    name: 'Куринная Сыр',
                    price: 97,
                    count: 0
                }
                break;

            case 'кг':
                item = {
                    id: 1,
                    name: 'Куринная Грибы',
                    price: 94,
                    count: 0
                }
                break;
            case 'к5':
                item = {
                    id: 1,
                    name: 'Куринная  х5',
                    price: 85 * 5,
                    count: 0
                }
                break;
            case 'м' :
                item = {
                    id: 2,
                    name: 'Мини',
                    price: 55,
                    count: 0
                }
                break;
            case 'мс' :
                item = {
                    id: 2,
                    name: 'Мини Сыр',
                    price: 55 + 12,
                    count: 0
                }
                break


            default:
                return
        }


        setState(
            {
                countItems: state.countItems + 1,
                items: [
                    ...state.items,
                    item
                ],
            }
        )


    }
    return (
        <div className="App">
            <AddItem onSubmit={onSubmit}/>
            <div className='sum'>Общая сумма: {sum}</div>
            <ItemsList data={state.items} count={state.countItems}/>
        </div>
    );
}

export default App;
