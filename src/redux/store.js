import { createStore } from "redux";
let count = 1;
const initial =   {
    id: 1,
    name: 'Куринная',
    price: 85,
}
const mini =  {
    id: 2,
    name: 'Мини',
    price: 55*count,
}
const kur =  {
    id: 1,
    name: 'Куринная',
    price: 85,
}
const kebab = (state = [initial], action) => {

    switch (action.type) {
        case "ADD_ITEM": {
            let name
            const reg = action.title.match(/\d/g);

            console.log(action.title[0]);
            (reg)?count = reg.join('') :count = 1;
            (count!==1)?name = 'Мини х'+count:name = 'Мини'
            if (action.title[0] === 'м') {
                return [
                    ...state,
                    {
                        id: 2,
                        name: name,
                        price: 55*count,
                    }
                ];
            }
            else if (action.title[0] === 'к') {
                return [
                    ...state,
                    kur
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

