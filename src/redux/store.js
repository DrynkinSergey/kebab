import { createStore } from "redux";
import {useState} from "react";
let count = null;
const initial =   {
    id: 1,
    name: 'Куринная',
    price: 85,
}


const kur =  {
    id: 1,
    name: 'Куринная',
    price: 85,
}
const a = 'Мини',
    b='Куринная',
    c='Фри',
    d='Мини араб'
const kebab = (state = [initial], action) => {

    switch (action.type) {
        case "ADD_ITEM": {
            let name
            if(action.title[0] === 'м'){
                name = a
            }else if(action.title[0] === 'к') {
                name = b
            }else if(action.title[1] === 'р') {
                name = d
            } else name=c
            const reg = action.title.match(/\d/g);

            (reg)?count = reg.join('') :count = 1;
            if (count !== 1){
                name= `${name} x${count}`
            }
            let nameOfAdd;


            if (action.title[1] === 'р'){
               nameOfAdd = action.title.match(/[а-я]/g).slice(2);
            } else{
                nameOfAdd = action.title.match(/[а-я]/g).slice(1);

            }
            const add = action.title.match(/[а-я]/g).slice(1)
                .map((item,i) => {
                if (item  === 'с') {
                  return   item = 12
                } else if (item === 'г')
                   return  item = 9
                else if (item === 'к')
                    return  item = 9
                else return null
            })
            let result = add.reduce(function(sum, elem) {
                return sum + elem;
            }, 0);



            const kur =  {
                id: 1,
                price: (85+result)*count,
                add:{}
            }
            const mini =  {
                id: 2,
                price: (55+result)*count,
                add:{}
            }
            const miniArab =  {
                id: 3,
                price: (80+result)*count,
                add:{}
            }

            if (action.title[0] === 'м') {
                return [
                    ...state,
                    {
                        ...mini,
                        name: name+" " + nameOfAdd,
                        add: {...add}
                    }
                ];
            }
            if (action.title[1] === 'р') {
                return [
                    ...state,
                    {
                        ...miniArab,
                        name: name+" " + nameOfAdd,
                        add: {...add}
                    }
                ];
            }
            if (action.title[0] === 'ф') {
                return [
                    ...state,
                    {
                        id: 3,
                        name: 'Фри',
                        price: 40*count,
                    }
                ];
            }

            else if (action.title[0] === 'к') {
                return [
                    ...state,
                    {
                        ...kur,
                        name: name+" " + nameOfAdd,
                        add: {...add},
                        extra: {...nameOfAdd}
                    }
                ];
            }
            else
            {
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

