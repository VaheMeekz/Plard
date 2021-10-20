import {combineReducers} from "redux";
import {categoryReducer} from "../Category.reducer";
import {subcatigoryReducer} from "../SubCategory.reducer";
import {ItemReducer} from "../Item.reducer";

export const rootReducer = combineReducers({
    categoryReducer,
    subcatigoryReducer,
    ItemReducer
})