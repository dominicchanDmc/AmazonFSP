import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import cartItemsReducer from "./cartItemsReducer";
import ratingReducer from "./ratingsReducer";

const entitiesReducer = combineReducers({
  products: productReducer,
  cartItems: cartItemsReducer,
  ratings: ratingReducer
})

export default entitiesReducer