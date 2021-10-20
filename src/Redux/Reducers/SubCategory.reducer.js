import {ADD_SUB_CATEGORY_M, ADD_SUB_CATEGORY_W} from "../Actions/SubcAt.actions";


const initialState = {
    subcatW: [
        {id: Math.random(), name: 'обручальные'},
        {id: Math.random(), name: 'коктейльные'}
    ],
    subcatM: [
        {id: Math.random(), name: 'коктейльные'},
        {id: Math.random(), name: 'обручальные'}
    ],
}

export const subcatigoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUB_CATEGORY_W:
            return {
                ...state,
                subcatW: [...state.subcatW, action.payload]
            }
        case ADD_SUB_CATEGORY_M:
            return {
                ...state,
                subcatM: [...state.subcatM, action.payload]
            }

        default:
           return  state
    }
}