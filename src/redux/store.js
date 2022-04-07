import {createStore} from "redux";
import {menu} from "./menu";

let count = null;
const initial = {
    id: null,
    name: null,
    price: null,
}

const m = 'Мини',
    k = 'Куринная',
    fri = 'Фри',
    souce = 'Соус / Кетчуп',
    uzvar = 'Узвар',
    airan = 'Айран',
    dener = 'Денер',
    miniAr = 'Мини араб';


const kebab = (state = [initial], action) => {
    const {mini,kur} = menu;
    switch (action.type) {

        case "ADD_ITEM": {
            let nameOfAdd, name;

            action.title.match(/\d/g) ? count = action.title.match(/\d/g).join('') : count = 1;
            if (count !== 1) {
                name = `${name} x${count}`
            }

            if (action.title[1] === 'р') {
                nameOfAdd = action.title.match(/\W/g).slice(2);
            } else {
                nameOfAdd = action.title.match(/\W/g).slice(1);
            }

            const add = action.title.match(/\W/g).slice(1)
                .map(item => {
                    if (item === 'с' || item === 'а' || item === 'м'  ) {
                        return  12
                    } else if (item === 'г' || item === 'к' )
                        return   9
                    else if (item === 'п')
                        return   30
                    else return null
                })
            let result = add.reduce(function (sum, elem) {
                return sum + elem;
            }, 0);

            if (action.title[0] === '.') {
                return [
                    ...state,
                    {
                        ...initial
                    }
                ];
            }
            const show = (target) =>{
                return {
                    count: +count,
                    price: ((target.price + result) * count),
                    add: {...add},
                    extra: {...nameOfAdd}
                };
            }

            switch (action.title[0]) {
                case 'м': {
                    return [
                        ...state,
                        {
                            ...menu.mini,
                            ...show(mini)
                        }
                    ];
                }
                case 'к' :{
                    return [
                        ...state,
                        {
                            ...menu.kur,
                            count: +count,
                            price: ((menu.kur.price + result) * count),
                            add: {...add},
                            extra: {...nameOfAdd}
                        }
                    ];

                }
            }
            if (action.title[0] === 'м') {

            }
            if (action.title[1] === 'р') {
                return [
                    ...state,
                    {
                        ...menu.miniArab,
                        name: name + " " + nameOfAdd,
                        add: {...add}
                    }
                ];
            }
            if (action.title[0] === 'А') {
                return [
                    ...state,
                    {
                        ...menu.Arab,
                        name: name + " " + nameOfAdd,
                        add: {...add}
                    }
                ];
            }
            if (action.title[0] === 'ф') {
                return [
                    ...state,
                    {
                        id: 3,
                        name: name,
                        price: 40 * count,
                    }
                ];
            }
            if (action.title[0] === 'с') {
                return [
                    ...state,
                    {
                        id: 4,
                        name: name,
                        price: 5 * count,
                    }
                ];
            }
            if (action.title[0] === 'а') {
                return [
                    ...state,
                    {
                        id: 4,
                        name: name,
                        price: 25 * count,
                    }
                ];
            }
            if (action.title[0] === 'у') {
                return [
                    ...state,
                    {
                        id: 4,
                        name: name,
                        price: 20 * count,
                    }
                ];
            }
            if (action.title[0] === 'д') {
                return [
                    ...state,
                    {
                        id: 4,
                        name: name + " " + nameOfAdd,
                        price: 57 * count,
                        add: {...add},
                        extra: {...nameOfAdd}
                    }
                ];
            } else if (action.title[0] === 'к') {

            } else {
                return state
            }
        }
        case "REMOVE_ITEM": {
            return state.filter((kebab) => kebab.id !== action.id);
        }

        default: {
            return state;
        }
    }
};

export const store = createStore(kebab);

export const addItem = (title) => ({
    type: "ADD_ITEM",
    title
});
export const removeTodo = (id) => ({
    type: "REMOVE_ITEM",
    id
});

