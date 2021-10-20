import kolco from '../../assets/staticImage/kolco.png'
import kole from '../../assets/staticImage/kole.png'
import cep from '../../assets/staticImage/Rectangle 621.png'
import {ADD_CATEGORY_M, ADD_CATEGORY_W} from "../Actions/Category.actions";

const initialState = {
    categoriesW: [
        {id: Math.random(), name: 'кольцo', img: kolco},
        {id: Math.random(), name: 'серьги', img: kole},
    ],
    categoriesM: [
        {id: Math.random(), name: 'Цепь', img: kolco},
        {id: Math.random(), name: 'Брошь', img: cep}
    ],
    newSub:[

    ]
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_W:
            return {
                ...state,
                categoriesW: [...state.categoriesW, action.payload]
            }
        case ADD_CATEGORY_M:
            return {
                ...state,
                categoriesM: [...state.categoriesM, action.payload]
            }
        default:
            return state
    }
}