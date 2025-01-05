import React, { useContext } from 'react' // Importing React and the useContext hook from React library to use context data.
import { UserContext } from '../context/Context' // Importing UserContext from the Context component where it was defined.

const Card = () => { // Define a functional component called 'Card'.

  // Using the useContext hook to access the context values (users in this case) from UserContext.
  // It allows you to get the current value of 'users' from the nearest UserContext.Provider above in the component tree.
  const { users } = useContext(UserContext);

  return (
    <div>
    {/* Looping through the 'users' array using map() to display each user's username. */}
    {
      users.map((u) => (
          // For each user object 'u', display their username inside an <h1> tag.
          <h1 key={u.id}>{u.username}</h1> // It's important to add a unique key prop when rendering lists of elements in React.
      ))
    }
    </div>
  )
}

export default Card; // Exporting the Card component so it can be used in other parts of the app.
