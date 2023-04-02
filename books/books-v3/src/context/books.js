// To change the value of a Context and updating it on Screen, we need to make use of useState here.

import axios from "axios";
import { createContext, useCallback, useState } from "react";

const BookContext = createContext(); // here we are creating a context object by the name 'BookContext'

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  /*
  The purpose here to make use of useCallback function is to make sure that the arrow function 'fetchbooks' has been created 
  and stored into memory only one time because we have put the dependency array as empty. And whenever this function is called, 
  it will only call the existed created 'fetchBooks' function from the computer memory..  
  */
  const fetchBooks = useCallback(async () => {
    console.log("fetchBooks got called!!");
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  
  const createBook = async (newTitle) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: newTitle,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const updateBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {                // here we are putting all above functions and 'books' state into an object of name 'valueToShare'
    books: books,
    fetchBooks: fetchBooks,
    createBook: createBook,
    updateBookById: updateBookById,
    deleteBookById: deleteBookById,
  };

  // here we are sharing the 'valueToShare' object to all Child components of 'App' and itself.
  return <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>;
}

export { Provider }; // to export provider function.
export default BookContext; // to export BookContext

/*
Here we are sending the 'valueToShare' object as a prop. Now this object has a piece of state which we will change from the screen. And 
once the piece of state gets updated, the 'Provider' tag in index.js will re-render the components that are put inside it.
*/

// Below is an example code of how to make use of useState, Custom Provider function and update the DOM with changing the Context
// here we have created a Custom Provider function which will have the piece of state 'count' and an object 'valueToshare'
// function Provider({ children }) {
//     const [count, setCount] = useState(5);    // here we created the piece of state and assigned default value '5' to it.
//     const valueToShare = {                    // this valueToShare object has two key:value pairs.
//       count: count,                           // 1. this key:value pair is where we are saving the value of our 'count' piece of state.
//       incrementCount: () => {                 // 2. this key:value pair is where we are updating the new value of our 'count' piece of state.
//         setCount(count + 1);
//       },
//     };

//     return (
//       <BookContext.Provider value={valueToShare}>
//         {children}                            {/*here we are passing the object 'valueToShare' to Components and its child components*/}
//       </BookContext.Provider>
//     );
//   }
