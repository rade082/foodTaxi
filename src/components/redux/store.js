import { configureStore } from "@reduxjs/toolkit";

import cartSlice  from "./cart-slice";
import loginSlice from "./login-slice";

const store = configureStore({
    reducer: {cart: cartSlice.reducer, login: loginSlice.reducer}
});

export default store;