import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

export default function rootReducer(state, action) {
  return {
    cart: cartReducer(state.cart, action),
    auth: authReducer(state.auth, action),
  };
}