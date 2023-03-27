import { useContext, useState } from "react";
import BookContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BookContext); // here we took out the 'createBook' function from 'BookContext' context so that we call the function here.

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createBook(title); // here we are calling the 'createBook' function which is defined in 'books.js '
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button" type="submit">
          Create!!
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
