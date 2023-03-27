import useBookContext from "../hooks/use-book-context";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useBookContext();     // here just one time we made use of the re-usable custom hook that we created in 'hooks' folder.

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
