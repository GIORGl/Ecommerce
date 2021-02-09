import { Switch } from "react-router-dom"

export const  initialState = {
    basket:[
        {title:'Macbook',
        price:999.99,
        img:'macbook.jpg'
    }
    ],
}

function reducer(state,action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //add some stuff stuff
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
            
            break;
    case 'REMOVE_FROM_BASKET':
        let newBasket = [...state.basket]
        const index = state.basket.findIndex((basketItem) => basketItem.title === action.title)
        if(index>=0) {
            newBasket.splice(index,1);
        }
        else {
            console.warn('no item found')
        }
        return {...state,basket:newBasket};
        default:
            return state;
    }
}

export default reducer;