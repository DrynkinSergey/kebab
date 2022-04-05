import '../../index.css'

import AddItem from "../AddItem/AddItem";
import {useSelector} from "react-redux";
import ItemsList from "../ItemsList/ItemsList";
import {useEffect, useState} from "react";

function App() {
    const kebab = useSelector(state => state);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        kebab.map(item => {
            setSum(sum + item.price)
        })
    }, []);
    useEffect(() => {
        kebab.map(item => {
            setSum(sum + item.price)
        })
    }, [kebab]);
    return (
        <div className="App">
            <AddItem/>
            <div className='sum'>Общая сумма: {sum}</div>
            <ItemsList/>
        </div>
    );
}

export default App;
