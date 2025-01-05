// Import necessary libraries and hooks from React and Redux
import React, { useEffect } from 'react';  // React and useEffect hook for performing side effects like fetching data
import { useDispatch, useSelector } from 'react-redux';  // useDispatch to dispatch actions and useSelector to access Redux state
import { asyncgetproducts } from '../store/actions/ProductActions';  // Async action to fetch products from an external API or data source
import { deletebutton } from '../store/reducers/ProductReducer';  // Action to handle the delete functionality

// Define the Products component
const Products = () => {

  // Access the 'products' array from the Redux state using useSelector
  // 'useSelector' allows us to read data from the Redux store
  const { products } = useSelector((state) => state.ProductReducer);
  // Destructuring 'products' from 'ProductReducer' part of the Redux store to get the list of products

  // Get the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  // Use the useEffect hook to fetch products when the component mounts
  // The empty dependency array ensures the effect runs only once after the first render
  useEffect(() => {
    // Dispatch the async action to fetch products from an API or other data source
    dispatch(asyncgetproducts());  // The action will update the products state in Redux
  }, []);  // Empty dependency array means the effect will run only once, like componentDidMount in class components

  // Define the deletehandle function, which will dispatch the delete action when called
  const deletehandle = (index) => {
    // Dispatch the delete action when a delete button is clicked
    // In this case, we are not passing any specific index or id, which might be a mistake in the current implementation
    // Typically, you would pass the product ID or index to the delete action
    dispatch(deletebutton());  // Dispatch the 'deletebutton' action to remove a product
  }

  return (
    // Render the component UI
    <div>
      <ul>
        {
          // Loop through the 'products' array and display each product
          products.map((product, index) => (
            <li key={index}>  {/* Provide a unique 'key' prop for each list item to optimize rendering */}
              <h1>
                {product.title}  {/* Display the title of each product */}
              </h1>
              <span onClick={() => deletehandle(index)}>  {/* Add a clickable "delete" button */}
                delete  {/* Text that represents the delete action */}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

// Export the Products component so it can be used elsewhere in the app
export default Products;
