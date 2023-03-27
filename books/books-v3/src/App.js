/*
This is the 3rd version of the Books Project. In this project, we will be using 'Context' to pass data from one component to another component.
We will not be making any more changes with the application as we have meet the requirements of getting, adding, updating and deleting book in
our 2nd version. we will only be making use of 'Context' here.
*/

import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BookContext); // here we took out the 'fetchBooks' function from 'BookContext' context so that we call the function here.

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;

/*
-- Context
   In React, a "context" is a way for components to share data without having to pass it explicitly through their parent and children 
   components. Context provides a way to share values, such as a theme, a user authentication status, or any other kind of data that 
   needs to be accessible to multiple components at different levels in the component tree.

   The context is essentially an object that contains the data that needs to be shared, and it can be accessed by any component that is 
   a descendant of the context provider. A context provider is a special component that sets up the context object and passes it down to 
   its children. Any component that needs to access the context can do so by using the useContext hook or by accessing the context object 
   through the Consumer component.

   Context is a powerful tool that can simplify the process of passing data between components, especially when dealing with deeply nested 
   component trees. However, it should be used judiciously and only when necessary, as overuse of context can lead to more complex code and 
   make it harder to reason about the behavior of individual components.

   Steps:
   1. Create the context: To create a context, we will write below code into a new './context/books.js' file
      import { createContext } from 'react';      // here we are importing 'createContext' from react to create a new context object.
      const BookContext = createContext();        // here are instantiating or creating a context object in a variable 'BookContext' 

   2. Specify the data that will be shared: To share values into components and their children, we need to put below code in index.js.
      import BookContext from './context/books'
      root.render(
        <BookContext.Provider value={5}>            // here we will share the data through a prop 'value'.  
          <MyComponent/>                            // here put all components tag with which we want to share data to those components and their child components
        </BookContext.Provider>                     // close the tag.  
      );

   3. 'consume' the data in a component 
      import { useContext } from 'react';         // here we are importing 'useContext' from react to use all context that we have already created.
      import BookContext from './context/books'            // here we are importing 'BookContext' which is a context that we have already created 
    
      function MyComponent(){
        const num = useContext(BookContext);      // here we are saving the whole object 'BookContext' into the 'num' variable.
        return <div>{num}</div>;
      }
*/

/*
-- Changing Context
   To change the value of a context object through a component, we need to make use of useState, Custom Provider function and use of the 
   'children' prop.
   Open 'books.js' for all code.
*/

/*
-- Application State 
   It is a data inside of our application, that is used by many different components.

-- Component State   
   It is a data inside of our application, that is used by ver few components. 
*/


/*
-- Hooks
   Functions that add additional features to a component
   useState   -->   Allows a component to use the state function.
   useEffect  -->   Allows a component to use run code at specific points in time.
   useContext -->   Allows a function to access values stored in context.
*/