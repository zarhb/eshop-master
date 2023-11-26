const { configureStore } = require("@reduxjs/toolkit");
import shoppingCartReduser from "./slices/shoppingCart/shoppingCartSlice";

export const Store = configureStore({
  reducer: { shoppingCart: shoppingCartReduser },
});
