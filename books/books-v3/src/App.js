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
    fetchBooks();     // while using useEffect, it can only return a function.
  }, [fetchBooks]);

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

/*
 -- useEffect Warning:  React Hook useEffect has a missing dependency: ' '. Either include it or remove the dependency array.
    State Variable Reference:
    While using useEffect, we have to be careful while making use of dependency array in it. 
    The basic concept of putting an empty dependency array is that the useEffect function will only run one time at the time of first render.
    Let us take an example where we have a useState: const [counter, setCounter] = useState(0);
    Now assume that we have put an 'onClick' function on an entire page which increase the value of 'counter' by 1.
    And with that we also have put a useEffect with an arrow function which console logs the value of 'counter' onto the terminal.
    But the important part here is that We have put empty dependency array which means that the useEffect will only run one time 
    which is at the time of first render.
    How useState work is when the component renders for the first time, The JavaScript will save the value of counter that is '0' into our
    Computer Memory and reference it with 'counter' variable. And whenever the component re-renders on click, The JavaScript will not go 
    to the existed memory location of that old value that is '0' and update it by '1'. But the JavaScript will create a new variable by the 
    same name 'counter' and it will save the new value that is '1' into a new computer memory location reference it will new variable. 
    Now we can say that there are two variables by the same name but different value and at different location.
    That is how useState works at every render and how we gets the updated value.
    
    The Problem we face is that we have put an empty dependency array on the useEffect so it will only run one time at first render.
    Now after the first render, the useEffect will not run at any further renders, that is why the console log inside that useEffect
    will only show us the first value of 'counter' at every clicks.

    How to Identify the Bug:
    Whenever a useEffect function contains an another function which refers to a variable, There is a big chance of getting this bug.

 -- Solution:
    The Simple solution is to make our useEffect functions re-runs at every renders.
    To do that, we know we can put a variable into our dependency array and whenever the value of that variable changes, the useEffect will
    re-run. So when the useEffect function has another function which is refering to a variable, we can take that variable and put it
    inside the dependency array.
    But this solution will not work every time. That is when we can use of useCallback.
*/

/*
 -- useCallback
    In React, When a Component re-renders, All of the functions that are inside of that component gets re-created. And the JavaScript stores
    those newly created functions into our Computer Memory in new locations at every render. Now sometimes, we do not want to re-create functions
    on re=renderning of component. That's where the 'useCallback' hook comes. 
    
    The 'useCallback' function takes a function and a dependency array as its argument.
    1. Consider the dependency array is empty:
    In the first render of the component, The useCallback function will create the function that it has taken as an argument and stores it into
    our computer's memory at some location. Now after the first render, whenever the component renders again, The useCallback function will
    not create a new function but it will only gives us back the first created function which we have already stored into our computer's memory
    when it rendered for the first time.
    Now this will only happen when we keep the dependency array empty.
    
    2. Consider the dependency array is not empty and it has a variable.
    In the first render, It will work as same as above that is The useCallback function will create the function that it has taken as an argument 
    and stores it into our computer's memory at some location. Now there are two possibilites. First is that after the first render, 
    whenever the component renders again, If the value of the variable that is inside the dependency array is changed, the useCallback 
    function will re-create the function and stores that newly created function into a new computer memory location. And second is if the
    value of that variable is not changed, it will give us back the last created function which we have already stored into our computer's memory
    when it rendered the last time.        
*/

/*
 -- 'return' statement in useEffect
    useEffect(() => {
      const cleanUp = () =>{
        console.log("log will be shown in next render!")
      }
      return cleanUp;
    }, [someVariable]);


    How 'return' works in useEffect:
    In the first render, when the function 'cleanUp' inside the useEffect is called, it gets return.
    But that returned function is only called in the second render. That is the console log that we see in the terminal is shown 
    after the component rendered for the second time. And second render can only happen, when the somevariable's value got changed.
    If the second render does not happen, we will not see any console log in the terminal.

*/