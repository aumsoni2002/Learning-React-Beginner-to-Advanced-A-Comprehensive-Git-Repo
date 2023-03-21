// The 'index.js' is the first file which gets executed when the project runs inside the browser.

// There are five steps to follow to render a component on to a browser.
// 1. Import The React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";    // here we are importing the component 'App' which we created inside 'App.js'

// 2. Get a reference to the div with id root.
//    the 'index.html' will get render first in which we have an element with id="root" from where the execution will get start.
const el = document.getElementById("root");


// 3. Tell React to take control of that element.
const root = ReactDOM.createRoot(el);


// 4. Create a component:   a component is just a function with logic and returns some JSX.
// function App() {                   // we can also create and render components in just one file too, which does not need any import statements 
    // let message = 'hello world!!';                      // this is how we create a variable.
    // let name = 'Aum';
    // return <h1>Hy there!!</h1>;                         // returing JSX  with a simple string inside a h1 tag.
    // return <h1>{message} my name is {name}</h1>;        // to use a variable in return statment, we have to put the variable in curly braces.


    // const date = new Date();                            // here we have saved a Date object into a constant variable
    // const time = date.toLocaleTimeString();             // and here we are saving the time in the form of string into a constant variable
    // return <h1>{time}</h1>;                             // One way to return the time
    // return <h1>{new Date().toLocaleDateString()}</h1>   // second and short way to return time


    // const person = { name: 'Samantha' };
    // return <div>{person}</div>;              // When returning an object, it will show an error as React cannot return an object


    //   return (                      // here we have returned an input tag with properties/props
    //     <input
    //       type="number"             // a string as property's value must be in double quotes, if using directly
    //       min={5}                   // a number as property's value must be in curly braces, if using directly
    //       max={10}              
    //       list={[1, 2, 3]}          // Arrays - Wrap with curly braces
    //       style={{ color: "red" }}  // Objects - Wrap with curly braces, 
    //                                              the outer curly braces is to indicate that we are sending a javascript value
    //                                              the inner curly braces is to define an object
    //       alt={"anyMessage"} // 
    //     />
    //   ); 
    // let inputType = "number";                            
    // let minVal = 5;                                      
    // let maxVal = 10;
    // return <input type={inputType} min={minVal} max={maxVal}/>    // we can also send variables as property's value. Variables - Wrap with curly braces 


    //   Converting HTML to JSX
    //   1. All prop names follow camelCase: 
    //      maxLength, minLength, autoFocus, noValidate

    //   2. Number attributes use curly braces: 
    //      maxLength={5}

    //   3. Boolean 'true' can be written with just the property name. 'False' should be written with curly braces: 
    //      <input spellCheck> or <input spellCheck={true}> --> if you want to put props's value as true.    
    //      <input spellCheck={false}>                      --> if value is false

    //   4. The 'class' attribute is written as 'className'
    //      className="item"

    //   5. In-Line styles are provided as objects
    //      <div  style={{ textDecoration:'none', padding: '5px' }}>...</div>
// }


// 5. Show the component on the screen
//    below code will render our component 'App' onto our browser
root.render(<App />);
