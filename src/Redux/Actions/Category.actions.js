export const ADD_CATEGORY_W = 'ADD_CATEGORY_W'
export const ADD_CATEGORY_M = 'ADD_CATEGORY_M'

export const addCategoryWAC = (category) => {
    return {
        type: ADD_CATEGORY_W,
        payload: category
    }
}

export const addCategoryMAC = (category) => {
    return {
        type: ADD_CATEGORY_M,
        payload: category
    }
}