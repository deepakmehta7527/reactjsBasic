// Importing axios for making HTTP requests
import axios from "axios";
// Importing the 'getproducts' action creator from the ProductReducer file
import { getproducts } from "../reducers/ProductReducer";

// The async action creator that fetches the products from an API
export const asyncgetproducts = () => async (dispatch, getState) => {
  // getState gives access to the Redux store, allowing us to read the global state
  // The console log will print the entire current state of the Redux store
  console.log(getState())  // This is used to access the global data stored in Redux.

  try {
    // Making an HTTP GET request to fetch products from the API
    const response = await axios.get("https://fakestoreapi.com/products");

    // Once the data is fetched successfully, we dispatch an action to store it in Redux
    // 'response.data' contains the fetched products from the API
    dispatch(getproducts(response.data));  // The 'getproducts' action will store the products in the Redux store

  } catch (error) {
    // If there is an error during the HTTP request, it will be caught here
    console.log(error.message);  // Log the error message to the console for debugging purposes
  }
}
