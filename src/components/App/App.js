import '../../index.css'
import AddItem from "../AddItem/AddItem";
import {useSelector} from "react-redux";
import ItemsList from "../ItemsList/ItemsList";
import {useEffect, useState} from "react";

function App() {
    const kebab = useSelector(state => state);
    const [sum, setSum] = useState(0);


    let s=0;
    kebab.map(item => {
        s+=item.price;
    });
    useEffect(() => {

        setSum(s)
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
