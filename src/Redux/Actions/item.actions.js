export const ADD_ITEM_M= 'ADD_ITEM_W';
export const ADD_ITEM_W= 'ADD_ITEM_M';
export const NAME = 'NAME'
export const LOAD = 'LOAD'
export const WEIGHT = 'WEIGHT'
export const PRICE = 'PRICE'

export const addItemWAC = (item) =>{
    return{
        type: ADD_ITEM_M,
        payload: item
    }
}

export const addItemMAC = (item) =>{
    return{
        type: ADD_ITEM_W,
        payload: item
    }
}

export const nameAC = (name) => {
    return{
        type: NAME,
        payload: name
    }
}

export const loadAC = (load) => {
    return{
        type: LOAD,
        payload: load
    }
}

export const weightAC = (weight) => {
    return{
        type: WEIGHT,
        payload: weight
    }
}

export const priceAC = (price) => {
    return{
        type: PRICE,
        payload: price
    }
}


