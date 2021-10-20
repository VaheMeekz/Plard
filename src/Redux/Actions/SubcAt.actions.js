

export const ADD_SUB_CATEGORY_W= 'ADD_SUB_CATEGORY_W';
export const ADD_SUB_CATEGORY_M= 'ADD_SUB_CATEGORY_M';

export const addsubcatWAC = (subcategory) =>{
    return{
        type: ADD_SUB_CATEGORY_W,
        payload: subcategory
    }
}

export const addsubcatMAC = (subcategory) =>{
    return{
        type: ADD_SUB_CATEGORY_M,
        payload: subcategory
    }
}

