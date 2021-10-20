import {ADD_ITEM_M, ADD_ITEM_W, LOAD, NAME, PRICE, WEIGHT} from "../Actions/item.actions";
import img from '../../assets/staticImage/Rectangle 621.png'


const initialState = {
    ItemW: [
        {id: Math.random(), category: 'коктейльные', artikul: 'ACC', img: img, name: 'ring', order: 1,price:2000,ves:200},
        {id: Math.random(), category: 'обручальные', artikul: 'ACS', img: img, name: 'kolco', order: 2,price:2800,ves:510},

    ],
    ItemM: [
        {id: Math.random(), category: 'коктейльные', artikul: 'ACC', img: img, name: 'kolco', order: 1,price:4000 ,ves:210},
        {id: Math.random(), category: 'обручальные', artikul: 'ACS', img: img, name: 'ring', order: 2,price:2300,ves:330},
    ],
    name: '',
    load: false,
    weight: [ ],
    price: []
}

export const ItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_M:
            return {
                ...state,
                ItemM: [...state.ItemM, action.payload]
            }
        case ADD_ITEM_W:
            return {
                ...state,
                ItemW: [...state.ItemW, action.payload]
            }
        case NAME:
            return {
                ...state,
                name: action.payload
            }
        case LOAD:
            return {
                ...state,
                load:action.payload
            }
        case WEIGHT:
            return {
                ...state,
                weight:action.payload
            }
        case PRICE:
            return {
                ...state,
                price:action.payload
            }
        default:
            return state
    }
}
