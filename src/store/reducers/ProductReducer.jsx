// Importing createSlice from Redux Toolkit to create a slice of the Redux store
import { createSlice } from "@reduxjs/toolkit";

// Initial state of the 'ProductSlice', containing an empty products array
const initialState = {
  products: [],
};

// Creating the slice of the Redux store for products
export const ProductSlice = createSlice({
  // The name of the slice, used to identify it in Redux dev tools
  name: "products",

  // Initial state for this slice of the store
  initialState,

  // Reducers define how the state can be changed based on actions
  reducers: {
    // The 'getproducts' reducer to update the 'products' array with new data
    getproducts: (state, action) => {
      // 'action.payload' contains the new products data, which replaces the current products in state
      state.products = action.payload;
    },

    // The 'deletebutton' reducer to delete a product from the 'products' array
    deletebutton: (state, action) => {
      // 'action.payload' contains the index of the product to delete
      // Splice removes the product at the given index
      state.products.splice(action.payload, 1);
    },
  },
});

// Exporting the reducer function that will be used in the Redux store
export default ProductSlice.reducer;

// Exporting the action creators for the 'getproducts' and 'deletebutton' actions
export const { getproducts, deletebutton } = ProductSlice.actions;
