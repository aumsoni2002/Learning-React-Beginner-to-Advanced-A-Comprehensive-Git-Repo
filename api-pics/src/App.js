import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  
    const [images, setImages] = useState([]);
  /* 
  letting JavaScript know that the below function is an asynchronous function so wait 
  for 'searchImages' function to return a value first and only then returned value will get saves in 'result' variable.
  */
  const handleSubmit = async (searchTerm) => {
    const result = await searchImages(searchTerm);
    setImages(result);
  };
  return (
    <div>
      <SearchBar userEntered={handleSubmit} />
      {/*Sending the 'handleSubmit' function as a prop*/}
      <ImageList images={images} />
    </div>
  );
}

export default App;

/*
-- How React works?
   In React, a communication between two or more children components is not possible.
   To  have a communication between two children, we always have to add the parent component which gets the data from one child
   component and sends to other child component.
   When you update a state which is in the Parent Component than all of its Child Component gets re-rendered. 
   
   Parent to Child Communication:   Using props
   The communication of Parent to Child can easily be done by using 'props'.

   Child to Parent Communication:   Using normal events and props
   The parent component passes a function to child component as a prop. Now that function takes an argument.
   In the child component, we put an event handler. whenever some event occurs, we call that function which is passed as a prop
   and we put some data as an argument inside that prop which will be sent to the parent component through that prop and the 
   function which is in the parent component will take that data as its argument.
   This is how we passes data from child to parent.  
*/
