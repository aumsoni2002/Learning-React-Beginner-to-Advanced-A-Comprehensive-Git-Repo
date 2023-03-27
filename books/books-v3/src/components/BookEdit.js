import { useState, useContext } from "react";
import BookContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { updateBookById } = useContext(BookContext); // here we took out the 'updateBookById' function from 'BookContext' context so that we call the function here.

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    onSubmit();
    updateBookById(book.id, title); // here we are calling the 'updateBookById' function which is defined in 'books.js '
  };

  return (
    <form className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button type="submit" onClick={handleClick} className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
