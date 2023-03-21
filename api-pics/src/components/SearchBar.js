import '../css/SearchBar.css'
import { useState } from "react";

function SearchBar({ userEntered }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault(); // preventing from page reload and any default behaviour
    userEntered(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <h1>Enter Search Term</h1>
        <input value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

/*
-- event.preventDefault()
   event.preventDefault() is a method in JavaScript that is used to prevent the default behavior of an event.
   When an event is triggered in a web page, such as a form submission, link click, or button click, the browser 
   performs a default action associated with that event. For example, when a form is submitted, the page will reload, 
   or when a link is clicked, the browser will navigate to the URL specified in the link.
   The preventDefault() method can be used to prevent the default behavior of the event from occurring. 
   This is useful in situations where you want to handle the event yourself using custom code instead of relying on 
   the default behavior. 
*/

/*
-- Handling Input Elements
   In react, All the Form Controls must get wired up with the useStates.
   
   Here in this project, we are taking the input value with the help of event handling method and useState.
   We have created a useState with variable 'searchTerm' and setter 'setSearchTerm'.
   Then we create an event handler and put the 'onChange' event on the input tag.
   whenever the user enters anything on the input, the event handler which is attached to 'onChange' event will get run.
   Now that event handler is just a function which has a setter that sets the entered input value with 'event'. 
*/
