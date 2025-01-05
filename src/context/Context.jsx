import React from 'react' // Importing React library to use React components.
import { createContext, useState } from 'react' // Importing createContext and useState hooks from React.


// Create a context called UserContext. This will allow sharing data between components in the component tree.
export const UserContext = createContext();

// Context component which will wrap around other components and provide the context value to them.
const Context = (props) => {

  // useState hook is used to create state variables. 'users' is the state variable,
  // and 'setusers' is the function to update the 'users' state.
  const [users, setusers] = useState([
    {id: 0, username: "dep", city: "india"}, // Initial state with an array of user objects.
    {id: 0, username: "mohan", city: "pak"},
    {id: 0, username: "sohan", city: "eng"}
  ]);

  return (
    // The UserContext.Provider component provides the state values (users and setusers) to its child components.
    // Any child component wrapped inside <Context> will have access to 'users' and 'setusers' through UserContext.
    <UserContext.Provider value={{users, setusers}}>
      {props.children}
      {/* // 'props.children' allows other components inside "<Context>"" to access the context. */}
    </UserContext.Provider>
  );
}

export default Context; // Exporting Context component to be used in other parts of the app.
