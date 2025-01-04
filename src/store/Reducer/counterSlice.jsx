// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state of the counter slice
const initialState = {
  value: 0,  // The initial value of the counter is set to 0
}

// Create a Redux slice called 'counter' using the createSlice function
export const counterSlice = createSlice({
  // The name of this slice, which is "counter"
  name: 'counter',

  // The initial state defined above
  initialState,

  // The reducers (functions that modify the state) for this slice
  reducers: {
    // Action to increment the counter by 1
    increment: (state) => {
      // Redux Toolkit uses Immer under the hood, so we can directly mutate the state here.
      // The 'state' object here is actually a draft that Immer turns into a new, immutable state.
      state.value += 1  // Increase the value by 1
    },

    // Action to decrement the counter by 1
    decrement: (state) => {
      state.value -= 1  // Decrease the value by 1
    },

    // Action to increment the counter by a specific amount provided as payload
    incrementByAmount: (state, action) => {
      state.value += action.payload  // Increase the value by the amount in action.payload
    },
  },
})

// Redux Toolkit automatically generates action creators for each reducer function.
// Destructure these action creators for easy use in the app.
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Define an asynchronous action that dispatches the incrementByAmount action after a delay
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    // After 1 second, dispatch the incrementByAmount action with the specified 'amount'
    dispatch(incrementByAmount(amount))
  }, 1000)  // Delay the action by 1000ms (1 second)
}

// Export the reducer so it can be used to update the state in the store
export default counterSlice.reducer
