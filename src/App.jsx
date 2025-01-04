// Importing React and Redux hooks for connecting the component to the Redux store
import React from "react";
import { useDispatch, useSelector } from "react-redux";  // useDispatch for dispatching actions, useSelector for accessing the state

// Importing the actions from the counterSlice file that we want to dispatch
import {
  increment,  // Action to increment the counter
  decrement,  // Action to decrement the counter
  incrementAsync,  // Async action to increment the counter by a specific amount after a delay
} from "./store/Reducer/counterSlice";  // Importing actions from the counterSlice file

const App = () => {
  // Using the `useSelector` hook to access the `counter` slice of the Redux store state
  // We destructure the `value` from the `counter` state so we can use it in our component
  const { value } = useSelector((state) => state.counter);

  // Using the `useDispatch` hook to access the Redux store's dispatch function
  // This allows us to dispatch actions to update the Redux state
  const dispatch = useDispatch();

  return (
    // A div container for the whole app, styled with Tailwind CSS classes
    <div className="m-auto container mt-5 bg-red-100 p-10">

      {/* Displaying the current value of the counter */}
      <h1 className="text-center font-bold text-3xl text-red-900">
        Counter: {value}
      </h1>

      <div className="text-center">

        {/* Button to trigger the increment action */}
        <button
          onClick={() => dispatch(increment())}  // Dispatches the `increment` action when clicked
          className="text-red-900 border-red-900 border-2 rounded bg-transparent px-5"
        >
          Increment
        </button>

        {/* Button to trigger the decrement action */}
        <button
          onClick={() => dispatch(decrement())}  // Dispatches the `decrement` action when clicked
          className="text-red-900 border-red-900 border-2 rounded bg-transparent px-5"
        >
          Decrement
        </button>

        {/* Button to trigger the incrementAsync action */}
        <button
          onClick={() => dispatch(incrementAsync(5))}  // Dispatches the `incrementAsync` action with a payload of 5
          className="text-red-900 border-red-900 border-2 rounded bg-transparent px-5"
        >
          Increment by 5
        </button>

      </div>
    </div>
  );
};

export default App;  // Exporting the App component so it can be used in other parts of the app
