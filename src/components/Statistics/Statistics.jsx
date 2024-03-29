import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Statistic = ({ closeStat}) => {
    // const [countOfPos, setCountOfPos] = useState(0);
    const {orders, sum} = useSelector(state => state.order)
    const [counters, setCounters] = useState({
            pizzas: {count:0, sum:0},
            fri: {count:0, sum:0},
            napitki: {count:0, sum:0},
            kebab: {count:0, sum:0},
        }
    )
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
    const getReg = () => {
        orders.forEach(item => {
                let i = 2;
                while (i < item.length) {
                    if (item[i].searchPhrase.match(/п[^лнб]/i)) {
                        setCounters({...counters, pizzas:{count:counters.pizzas.count += item[i].count , sum:counters.pizzas.sum += item[i].count * item[i].price}})
                    } else if (item[i].searchPhrase.match(/к./i)) {
                        setCounters({...counters, kebab:{count:counters.kebab.count += item[i].count , sum:counters.kebab.sum += item[i].count * item[i].price}})
                    } else if (item[i].searchPhrase.match(/ф./i)) {
                        setCounters({...counters, fri:{count:counters.fri.count += item[i].count , sum:counters.fri.sum += item[i].count * item[i].price}})
                    } else if (item[i].searchPhrase.match(/н./i)) {
                        setCounters({...counters, napitki:{count:counters.napitki.count += item[i].count , sum:counters.napitki.sum += item[i].count * item[i].price}})
                    }
                    i++;
                }
            }
        )


    }
    useEffect(() => {
       getReg();
    }, [orders]);

    /*const items = {
        miniCount: {count: getCount('Мини'), name: 'Mini'},
        kurCount: getCount('Куринная'),
        arab: getCount('Араб'),
        miniArab: getCount('Мини Араб'),
        airan: getCount('Айран'),
        fri: getCount('Фри'),
        sel: getCount('Селянка'),
    }*/
    /*const ShowStat = ({name, counter = countOfPos}) => {
        return (
            <div className='info_item'>
                <h1>{compound[name].name}</h1>
                <h2>{counter}</h2>

                <ul>
                    {compound[name].cabbage && <li>Капуста : {(compound[name].cabbage * counter) / 1000} кг</li>}
                    {compound[name].carrots && <li>Морковка : {(compound[name].carrots * counter) / 1000} кг</li>}
                    {compound[name].cucumbers && <li>Огурец : {(compound[name].cucumbers * counter) / 1000} кг</li>}
                    <li>Помидор : {(compound[name].tomato * counter) / 1000} кг</li>
                    <li>Соус : {(compound[name].souce * counter) / 1000} литра</li>
                    <li>Лаваш : {compound[name].bread * counter} шт</li>
                    <li style={{fontWeight: 'bold'}}>Цена: {compound[name].price * counter} грн</li>
                </ul>
            </div>
        )
    }*/


    return (
        <div className={`statistic`}>
            <div className='statistic__content'>
                <svg onClick={() => closeStat(false)} width='40' viewBox="0 0 20 19.84"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/>
                </svg>
                <h1>Статистика</h1>
                <h2>Доход: {sum}</h2>

                <div>
                    <h2> Напитки - {counters.napitki.count} Доход: {counters.napitki.sum}
                    </h2>
                    <h2> Шаурма - {counters.kebab.count} Доход: {counters.kebab.sum}
                    </h2>
                    <h2> Пицца - {counters.pizzas.count} Доход: {counters.pizzas.sum}
                    </h2>
                    <h2> Фри - {counters.fri.count} Доход: {counters.fri.sum}
                    </h2>

                </div>
                {/*<div className='info'>
                    <ShowStat name={'kur'} counter={items.kurCount}/>
                    <ShowStat name={'mini'} counter={items.miniCount.count}/>
                    <ShowStat name={'arab'} counter={items.arab}/>
                    <ShowStat name={'miniArab'} counter={items.miniArab}/>
                </div>*/}
               {/* <div className='info2'>
                    <div className='info_other'><p>Айран: {items.airan} шт. </p>
                        <p>Цена: {items.airan * 30} грн.</p></div>
                    <div className='info_other'><p>Фри: {items.fri} шт.</p> <p>Цена: {items.fri * 40} грн</p></div>
                    <div className='info_other'><p>Селянка: {items.sel} шт.</p> <p>Цена: {items.sel * 45} грн</p></div>
                </div>*/}
            </div>

        </div>
    );
};

export default Statistic;
