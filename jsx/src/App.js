// Creating a Component

// 1. Create a new file. (By convention) File should start with a capital letter]
//    src/App.js

// 2. Make your component which should be a function that returns JSX.
      function App(){
        return <h1>Creating a Component in App.js file and rendering it on browser through calling it from index.js</h1>;
      } 

// 3. Export the component at the bottom of the file. It is also called Default Export Statement. There can only be one.
      export default App;

// 4. Import the component into another file. t is also called Default Import Statement.
//    import App from "./App";              // this line needs to be written where we want to use this component

// 5. Use the component
//    <App/>                                // this line needs to be written where we want to use this component inside root.render method



// The 2 and 3 can also be written as:
// export default function App(){
//     return <h1>Creating a Component in App.js file and rendering it on browser through calling it from index.js</h1>;
//   } 



// -- Named Export Statements
//    Use when exporting multiple variables
//    Can have as many named exports as we want
//    Two ways to write a named export
//    1. const message = 'hi';                          2. export const message = 'hi';
//       export {message};  

// -- Named Import Statements
//    Curly braces indicate that we want a 'named' export
//    Single import statement can get both default + named exports
//    Named exports cannot be renamed
//    import App, { message } from './App'