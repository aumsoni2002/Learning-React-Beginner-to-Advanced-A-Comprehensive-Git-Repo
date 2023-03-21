import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  // Below function calls the 'onDelete' function which takes an 'id' as an argument of only that book on which the cross button has been clicked.
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  // below function changes the boolean value of the 'showEdit' State.
  const handleEditClick = () => {
    setShowEdit(!showEdit); // c
  };

  // below function changes the boolean value f the 'showEdit' State and calls the 'onUpdate' function
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onUpdate(id, newTitle);
  };

  let content = <h3>{book.title}</h3>; // showing the title of each 'book' prop which is coming from the BookList Component
  if (showEdit === true) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
        {/*In below src, we have used String Interpolation in which with the help of backticks, we can put any varibale just with ${} */}
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/> 
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
