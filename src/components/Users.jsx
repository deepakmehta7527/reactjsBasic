// Importing necessary React functions and hooks
import React from 'react';
import { useDispatch, useSelector } from "react-redux";  // useDispatch to dispatch actions, useSelector to access Redux state
// Importing the 'userdelete' action from the UserReducer file
import { userdelete } from '../store/reducers/UserReducer';

const Users = () => {
  // Getting the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  // Using useSelector to access the 'users' array from the Redux store
  // 'state.UserReducer' is the slice of the state that contains the users array
  const { users } = useSelector(state => state.UserReducer);

  // DeleteHandler function, called when a delete button is clicked
  const DeleteHandler = (id) => {
    // Dispatching the 'userdelete' action with the user's id to delete the user
    // The id will be passed to the reducer to remove the specific user from the state
    dispatch(userdelete(id));
  }

  return (
    // Rendering the list of users
    <div>
      {
        // Mapping through the 'users' array and rendering each user
        users.map((user, index) => {
          return (
            <div key={user.id}>
              {/* Displaying the user's name */}
              <h1>{user.name}</h1>

              {/* A span element that triggers the DeleteHandler when clicked */}
              {/* Passing the user's id to DeleteHandler to delete the corresponding user */}
              <span
                onClick={() => DeleteHandler(user.id)}  // Pass the user's ID to the handler
                className="bg-red-200 rounded-md px-6"   // Some basic styling for the "Delete" button
              >
                Delete
              </span>
            </div>
          );
        })
      }
    </div>
  )
}

export default Users;
