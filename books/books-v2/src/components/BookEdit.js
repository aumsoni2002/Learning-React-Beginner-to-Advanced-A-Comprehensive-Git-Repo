import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleClick = (event) =>{
        event.preventDefault();
        onSubmit(book.id, title);
    }

  return (
    <form className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}/>
      <button type="submit" onClick={handleClick} className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
