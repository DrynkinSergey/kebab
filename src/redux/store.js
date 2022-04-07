import {createStore} from "redux";
import uniqid from 'uniqid';
import {menu} from "./menu";

let count = null;
const initial = {
    uniqId:uniqid(),
    id: null,
    name: null,
    price: null,
}



const kebab = (state = [initial], action) => {
    const {mini,kur,miniArab,Arab} = menu.kebab;
    switch (action.type) {

        case "ADD_ITEM": {
            let nameOfAdd;


            if (action.title[1] === 'р') {
                nameOfAdd = action.title.match(/\W/g).slice(2);
            } else {
                nameOfAdd = action.title.match(/\W/g).slice(1);
            }
            action.title.match(/\d/g) ? count = action.title.match(/\d/g).join('') : count = 1;
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



            const show = (target) =>{
                return {
                    uniqId:uniqid(),
                    count: +count,
                    price: ((target.price + result) * count),
                    add: {...add},
                    extra: {...nameOfAdd}
                };
            }

            switch (action.title[0]) {

                case '.': {
                    return [
                        ...state,
                        {
                               ...initial
                        }
                    ];
                }
                case 'м': {
                    return [
                        ...state,
                        {
                            ...mini,
                            ...show(mini)
                        }
                    ];
                }
                case 'к' :{
                    return [
                        ...state,
                        {
                            ...kur,
                            ...show(kur)
                        }
                    ];
                }
                case 'а' :{
                    return [
                        ...state,
                        {
                            ...miniArab,
                            ...show(miniArab)
                        }
                    ];
                }
                case 'А' :{
                    return [
                        ...state,
                        {
                            ...Arab,
                            ...show(Arab)
                        }
                    ];
                }
                default: {
                    return state;
                }
            }

        }
        case "REMOVE_ITEM": {
            return state.filter((kebab) => kebab.uniqId !== action.id);
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

