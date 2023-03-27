// This is a re-usable hook function which can be used where ever we want to use 'BookContext'.
// We simply have to call the 'useBookContext' function.
// With the help of this re-usable function, we do not need to import 'useContext' and 'BookContext' in every file to use them.

import { useContext } from "react";
import BookContext from "../context/books";

function useBookContext() {
  return useContext(BookContext);
}

export default useBookContext;
