/*
This is the Second Version of my 'books' project. In this project I have connected our React application with a JSON-Server(API Server)
which will save all our books data that is a list of all books which I add, edit and delete, into a Database.
For Server Setup -- I have installed a node module 'json-server'
JSON Server Setup:
 1. Install JSON-Server with NPM at the terminal
 2. Create a 'db.json' file. This is where data will be stored
 3. Create a command to run JSON-Server in package.json -->    "server": "json-server -p 3001 --watch db.json"
    the above command is saying that runs the server on port 3001 and it tells the server to watch and store data in db.json
 4. Run the command!  --> npm run server on a second terminal

Things I have done in this applicaton:
 1. Create the API and understand how it works.
 2. When app starts up, make a request to API to get the current list of books
 3. When user creates/edits/deletes a book, update the API, then update local data

 It now takes two commands to start this project:
  npm run start   -->   Starts the React dev server
  npm run server  -->   Starts JSON-Server
*/

import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    console.log("fetchBooks got called!!");
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (newTitle) => {
    // here 'async' means we are telling the compiler that this function is an asynchronus function.
    // here 'await' means that wait for the server to get and save 'title' into database. The server will than send back a response.
    // save the comming response into 'response' variable. Once the response gets saved into varibale.
    // Than only the compiler will go ahead to comiple below lines of code
    const response = await axios.post("http://localhost:3001/books", {
      title: newTitle,
    });
    const updatedBooks = [...books, response.data]; // the 'response.data' is an object which has only 'title' and 'id'
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`); // here we are deleting the object with id.

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const updateBookById = async (id, newTitle) => {
    // In below function, we are editing our existing object by changing the 'title' property's value
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    // setBooks(response.data);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        // here the spread operator means take all the different key:value pairs that 'response.data' have and put them inside the current 'book' object.
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>

      <BookList
        books={books}
        onDelete={deleteBookById}
        onUpdate={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

/*
-- How the API Works in this project:
   Getting all books: GET Request
   1. A HTTP Request of type 'GET' will be send to the 'http://localhost:3001/books'.
   2. Now the 'GET' type is for getting all Objects from our database.
   3. With the help of the type 'GET', I will send a request to get all objects from our database.
   4. The JSON-Server will take that request and it will provide us with all existing objects which is inside that database.
   5. Once it processes our request. It will send a response which will have all objects which I will reflect/show 
      it on our React Application as Front-End.

   Creating a book: POST Request
   1. A HTTP Request of type 'POST' will be send to the 'http://localhost:3001/books'.
   2. Now the 'POST' type is for adding an Object into our database.
   3. With the help of the type 'POST', I will send an object with the request to get added into our database.
   4. The JSON-Sever will take that object, gives an unique id to it, and it will save it in db.json.
   5. Once it gets saved in db.json. It will send a response which will have that new object which I will reflect/show 
      it on our React Application as Front-End.
   
   Editing a book: PUT Request
   1. A HTTP Request of type 'PUT' will be send to the 'http://localhost:3001/books/1'. 
      here '1' is the id of that object which I have to makes changes with. To make changes with existing object, I must have to send id of that object.
   2. Now the 'POST' type is for editing an existing Object into our database.
   3. With the help of the type 'PUT', I will send an object with request to get edited with an existing object into our database.
   4. The JSON-Sever will take that object, goes to that existing object which has id '1', and it will make new changes that we want.
   5. once it makes those changes and saves in db.json. It will send a response which will have that edited object which I will reflect/show 
      it on our React Application as Front-End.

   Deleting a book: DELETE Request
   1. A HTTP Request of type 'DELETE' will be send to the 'http://localhost:3001/books/1'. 
      here '1' is the id of that object which I wants to delete. To delte that existing object, I must have to send id of that object.
   2. Now the 'DELETE' type is for deleting an existing Object from our database.    
   3. With the help of the type 'DELETE', I will send an object with request to delete an existing object from our database.
   4. The JSON-Sever will take that object, goes to that existing object which has id '1', and it will delete the object completely.
   5. Once it deletes it. it will send a response which will have a message that the object got deleted. And I will not be able to show it on our React Application. 
*/

/*
-- useEffect
   useEffect is a tool in React that allows you to perform actions in your components that might affect things outside the component, 
   like the document title, a server, or other parts of the app.
  
   It works like this: you give it a function to run, and it runs that function every time the component renders. 
   But if you give it an array of "dependencies", it will only re-run that function if any of those dependencies have changed 
   since the last render.
   
   This makes it easy to manage side effects in your app and keep them in sync with your component's state. For example,
   you might use useEffect to update the title of your page when a counter changes, or to fetch data from an API when a user logs in. 

   In this project: Let us understand when our arrow function gets called:
   The arrow function in the useEffect always gets called after the 'first render'.
   Once the component get render for the first time, the arrow function might get called other times depending upon the second argument
   of the useEffect.

   Lets look at three types of second argument in useEffect:
   1. Second argument is []
      useEffect(() => { console.log("runs only one time"); }, []);
      here the empty sets of square bracket means:
      the function will be called right after first render.
      It will never called again

   2. Second argument is nothing
      useEffect(() => { console.log("runs first time and after every re-render"); }); 
      the function will be called right after first render.
      It will always be called after every re-render.
      
   3. Second argument is [counter]
      useEffect(() => { console.log("runs first time and runs only when the counter varible's value gets change") }, [counter]);
      the function will be called right after first render.
      It will re-renders only when the conuter varible's value gets change.

   4. Second argument is [counterOne, counterTwo]   
      useEffect(() => { console.log("runs first time and runs only when any one varible's value gets change") }, [counterOne, counterTwo]);
      the function will be called right after first render.
      It will re-renders only when the conuter varible's value gets change.
*/
