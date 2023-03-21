import AnimalShow from "./AnimalShow";
import { useState } from "react"; // to use 'State System', we need to import 'useState' and it must be in curly braces
import './App.css'   // Importing all the stylings that are written in 'App.css'.

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  // In below code, we have created a piece of state(variable) 'animals', a setter function 'setAnimals' and initialize an empty array to 'animals'
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // In below code, we have made use of Spread Operator. With the help of this operator, we will take a random animal string from
    // 'getRandomAnimal' function and push it inside the empty 'animals' array. It will put the new random element string at the end of array.
    // console.log(getRandomAnimal())
    setAnimals([...animals, getRandomAnimal()]);
    // console.log(renderedAnimals)
  };

  // In below code, with the help of map() function we are passing each element and its index value of 'animals' array into a callback function.
  // Now the callback function takes each element and its index value of 'animals' array and returns rendered 'AnimalShow' component with two props
  // type and key. we are sending the 'element' to type and 'index' to key. 
  const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
  });
  
  /*
  -- Practice
     const [count, setCount] = useState(0);
     const handleClick = () => {
       console.log("Button was Clicked!!");
       setCount(count + 1);
     };
  */

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      {/* <div>Number of Animals to show: {count}</div> */}
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;

/*
-- Event System:    Detecting user interacting with screen/page.
   In above 'App' function, we have created a method by the name 'handleClick' and have linked with 'onClick' event which is on a button.
   Now whenever a user clicks that button where the 'onClick' event is attached, the 'handleClick' method will run. 

-- Steps to use Events
   1. Decide what kind of event you want to watch for
   2. Create a function. Usually called an event handler or callback function
   3. Name the function using pattern of handle + EventName (Not a requirement! Community convention)
   4. Pass the function as a prop to a plain element
   5. Make sure you pass the function using a valid event name (‘onClick’, 'onMouseOver', etc)
   6. Make sure you pass a reference to the function (don't call it! -- do not add '()' at the end.) If you add parenthesis at the end, it will 
      automatically call once the page gets render on the browser wihtout clicking the button.
*/

/*
-- State System:    updating content on screen(re-rendering)
   State is data that changes as the user interacts with our app
   When this data changes, React will update content on the screen automatically
   This is the one-and-only way we can change what content React shows.
   Even other libs that appear to update content use the state system behind the scenes

-- Steps to use State
   1. Define a piece of state with the useState function
      const [count, setCount] = useState();
   
   2. Give a value to the useState function. This is the default, starting value for our piece of state. In below case it is set to '0'
      const [count, setCount] = useState(0);
      count --> here the 'count' is our 'piece of state'(variable) in which the value gets saved and changes over time.
      setCount --> here the 'setCount' is the setter function to update values for 'count'. we will never set value directly to our variable
      useState(0) --> here we are setting the initial value of the 'piece of state' to '0'.  
   
   3. Use the state in some way in our component (often in the returned JSX)
      <div>Number of Animals to show: {count}</div>

   4. When user does something, update the piece of state. Causes React to rerender the component
      const handleClick = () => { setCount(count+1); };

-- Only Things to Understand Right Now
   Use the state system when you want to update content on the screen
   Calling 'useState' defines a new piece of state
   The first argument to ‘useState' is used as the initial value
   Updating state is done only using the setter function
   Salling the setter function causes React to rerender the component
*/

/*
-- Array Destructuring
   Array destructuring is a feature in JavaScript that allows you to extract values from an array and assign them to variables in a 
   single statement. This feature makes it easy to work with arrays and can help to simplify your code.
   To use array destructuring, you simply enclose a list of variable names in square brackets on the left-hand side of an assignment operator. 
   The right-hand side of the assignment should be the array that you want to destructure.

   const numbers = [1, 2, 3];
   const [a, b, c] = numbers;
   console.log(a); // 1
   console.log(b); // 2
   console.log(c); // 3
*/

/*
-- Spread Operator
The spread operator ' ... ' is a feature in JavaScript that allows an iterable such as an array, object, or string to be expanded or "spread" 
into individual elements. The spread operator can be used in a variety of ways to make your code more concise and easier to read. 

Copying Arrays:
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // creates a new array with the same values as arr1

Merging Arrays:
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2]; // creates a new array [1, 2, 3, 4]

Adding Elements to Arrays:
const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // creates a new array [1, 2, 3]
*/

/*
 -- map() function
    In JavaScript, the map() function is a built-in method 
    that is used to create a new array by performing a specified operation on each element of an existing array.
    The map() function takes a callback function as an argument, which is executed on each element of the original array, 
    and returns a new array with the results of the callback function.

    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = numbers.map(function(num) {
      return num * num;
    });
    onsole.log(squaredNumbers); // [1, 4, 9, 16, 25]

 */
