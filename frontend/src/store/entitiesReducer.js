import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import cartItemsReducer from "./cartItemsReducer";

const entitiesReducer = combineReducers({
  products: productReducer,
  cartItems: cartItemsReducer
})

export default entitiesReducer