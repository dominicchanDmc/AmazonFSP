import { combineReducers } from "redux";
import productReducer from "./productsReducer";

const entitiesReducer = combineReducers({
  products: productReducer
})

export default entitiesReducer