import React from 'react';

const Statistic = ({showStatistic,closeStat}) => {
    return (
        <div className={`statistic`}>
            <div className='statistic__content'>
             <svg onClick={()=> closeStat(false)} width='40' viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg"><path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/></svg>
                <h1>Статистика</h1>

            </div>

        </div>
    );
};

export default Statistic;