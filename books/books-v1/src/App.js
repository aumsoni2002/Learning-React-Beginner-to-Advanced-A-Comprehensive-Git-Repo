import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (newTitle) => {
    const updatedBooks = [ // here we are creating a new array by puting sets of square brackets [].
      ...books, // Than we are coping all the elements that are in 'books' state and pasting it inside above newly created array.
      {
        // Once the newly created array has all elements of 'books' state, we than put this new object at the end of the new array.
        id: Math.round(Math.random() * 9999),
        title: newTitle,
      },
    ];
    setBooks(updatedBooks); // here we are setting above newly created array which has elements from 'books' and a new element into 'books' state again.
  };

  const deleteBookById = (id) => {                // passing an 'id' to remove the element which has this id.
    const updatedBooks = books.filter((book) => { // going through each element of the 'books' state.
      return book.id !== id;                      // returing only those elements whose 'id' does not match with the above passing 'id' and saving it in updatedBooks 
    });
    setBooks(updatedBooks);                       // setting new array into 'books' state.
  };

  const updateBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      {/* Here we are sending the 'books' state and 'onDelete' function as a prop to BookList Component*/}
      <BookList books={books} onDelete={deleteBookById} onUpdate={updateBookById}/> 
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

/*
-- How to know about where should be the location of a 'State', when too many components are using them.
   Firstly, whenever we update a 'state', the component in which the state is defined, is going to re-render itself and all its 
   child components are going to re-render too.
   So we need to find all the components that uses this state.
   Once we find all those components, we will define the state in the Lowest Common Parent Component.
   
   In this project, The Component Structure looks like:
   App
   |____BookList      -->     BookShow    --> BootEdit
   |____BookCreate

   The Component 'App' is parent component of 'BookList' and 'BookCreate'.
   In this project, we have used a state 'books' which is used by both child components, so it is best approch to 
   define the 'books' state in 'App' Component. 
*/

/*
-- How to Update a State when an Object needs to be saved in it?
   In above Code, we are getting our 'title' from 'BookCreate' Component and it needs to be saved inside the 
   'books' state. We will not only save the 'title' but we are going to save 'id' with it too.
   So consider that a book will have a title and an id. That is why the above 'books' state will have arrays of Object.
   eg -- [{id:1, title: name1}, {id: 2, title: name2}, ...]

   To save arrays of Object in a state, we will have to use '...' Spread Operator
   const updatedBooks = [...books, {id: 1, title: name2}]

   The above code will perform three steps:
   1. It will create a new array (because of those square brackets are used).
   2. It will copy all elements from 'books' and copy it in that new created array which I mentioned in 1st step.
   3. Finally, It will add the element that is wriiten in above code at the end of that new created array.

   Once we get the updated arrays of Object, than we can save it inside our 'state' with its setter.
*/
