import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {compound} from "../../redux/slices/compound";

const Statistic = ({showStatistic, closeStat}) => {
    const [countOfPos, setCountOfPos] = useState(0);
    const [value, setValue] = useState('Мини');
    const {orders} = useSelector(state => state.order)
    const getCount = (searchName) => {
        let count = 0;
        orders.forEach(item => {
                let i = 2
                while (i < item.length) {
                    if (item[i].name === searchName) {
                        count += item[i].count
                    }
                    i++;
                }
            }
        )
        return count;
    }
    const miniCount = getCount('Мини');
    const kurCount = getCount('Куринная');
    const airan = getCount('Айран');
    const sel = getCount('Селянка');
    const fri = getCount('Фри');


    const ShowStat = ({name,counter = countOfPos}) => {
        return(
            <div className='info_item'>
                <h1>{compound[name].name}</h1>
                <h2>{counter}</h2>
                <h3>Капуста : {(compound[name].cabbage * counter)/1000} кг</h3>
                <h3>Морковка : {(compound[name].carrots * counter)/1000} кг</h3>
                <h3>Огурец : {(compound[name].cucumbers * counter)/1000} кг</h3>
                <h3>Помидор : {(compound[name].tomato * counter)/1000} кг</h3>
                <h3>Соус : {(compound[name].souce * counter)/1000} литра</h3>
                <h3>Лаваш : {compound[name].bread * counter} шт</h3>
                <h3>Цена: {compound[name].price * counter} грн</h3>
            </div>
            )
    }
    return (
        <div className={`statistic`}>
            <div className='statistic__content'>
                <svg onClick={() => closeStat(false)} width='40' viewBox="0 0 20 19.84"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
                </svg>
                <h1>Статистика</h1>
                <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
                <button onClick={() => setCountOfPos(getCount(value))}>Найти позицию</button>
                {countOfPos>0?
                    <div className='info'>
                        <ShowStat name={'kur'} counter={kurCount}/>
                        <ShowStat name={'mini'} counter={miniCount}/>
                    </div>

                : null}
                <div className='info2'>
                    <div className='info_other'><p>Айран: {airan} шт. </p>
                        <p>Цена: {airan*35} грн.</p></div>
                    <div className='info_other'><p>Фри: {fri} шт.</p> <p>Цена: {fri*40} грн</p></div>
                    <div className='info_other'><p>Селянка: {sel} шт.</p> <p>Цена: {sel*45} грн</p></div>
                </div>




            </div>

        </div>
    );
};

export default Statistic;
