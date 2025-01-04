// Importing `configureStore` from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing the counter reducer from the counterSlice file with "any name like "countername" you can take other name also
import countername from './Reducer/counterSlice';  // This is the default export from the counterSlice file

// Creating the Redux store using `configureStore` function
export const store = configureStore({
  reducer: {
    // Adding the 'counter' slice to the store's root reducer
    counterdata: countername,  // The reducer responsible for handling the 'counter' slice of state
  },
});
