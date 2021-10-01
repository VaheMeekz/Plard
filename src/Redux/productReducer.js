let ADDPRODUCT = "ADDPRODUCT";

let initialState = {
  category: [],
  addclass: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return { ...state, category: [...state.category, action.newcategory] };
    default:
      return state;
  }
};

export let addCategory = (newcategory) => {
  return {
    type: ADDPRODUCT,
    newcategory: newcategory,
  };
};
