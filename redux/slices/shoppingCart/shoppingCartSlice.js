import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  totalPaid: 0,
};

const recalculateTotals = (state) => {
  state.totalPrice = 0;
  state.totalPaid = 0;
  state.totalQuantity = state.items.length;
  state.items.map((item) => {
    state.totalPaid +=
      item.priceWithDiscount === 0 ? item.price : item.priceWithDiscount;
    state.totalPrice += item.price;
  });
  return state;
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToShoppingCart: (state, action) => {
      state.items.push({ ...action.payload, count: 1 });
      return recalculateTotals(state);
    },
    increaseItemCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count++ };
        }
      });
      return recalculateTotals(state);
    },
    decreaseItemCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item , count: item.count-- };
        }
      });
      return recalculateTotals(state);
    },
    removeItemFromShoppingCart: (state, action) => {
      state = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
      //state.items= state.items.filter((item) => item.id !== action.payload);
      return recalculateTotals(state);
    },
  },
});

export const {
  addItemToShoppingCart,
  increaseItemCount,
  decreaseItemCount,
  removeItemFromShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
