import BookShow from "./BookShow";

function BookList({ books, onDelete, onUpdate }) {
    // In below function we are going through each element of the 'books' state and returing rendered BookShow Component with 
    // sending each element and 'onDelete' function as a prop
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate}/>;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
