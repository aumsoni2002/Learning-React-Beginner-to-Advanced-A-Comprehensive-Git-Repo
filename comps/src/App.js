import Button from "./Button";
import { GoBell } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        {/* sending the 'Click me!!' text as value to Button component through children prop*/}
        <Button>
          <GoBell className="mr-1" />
          {/*Made use of the icon from react-icons library*/}
          {/*mr-1: margin right by 1 unit*/}
          primary
        </Button>
      </div>
      <div>
        <Button>secondary</Button>
      </div>
      <div>
        <Button>success</Button>
      </div>
      <div>
        <Button>warning</Button>
      </div>
      <div>
        <Button>danger</Button>
      </div>
    </div>
  );
}

export default App;

/*
-- The Children Prop
   When ever we create custom components, we can use the concept of 'children' prop.
   In this concept we can send any value from the parent component(where the child component tag is used) to the child component through
   only a specific prop name that is 'children'. To achive this commnunication, we need to put the value as string inside the child
   component's tag.
   
   Consider we have 'App.js' as Parent Component and 'Button.js' as child component
   // App.js
   import Button from "./Button";
   function App() {
     return (
       <div>
         <div>
           <Button>Click me!!</Button>    // by putting the value as string inside the child component's tag, we are sending it to the child component
         </div>
       </div>
     );
   }
   export default App;

   // Button.js
   function Button({children}) {            // here is the prop 'children' that we have used to get the text from Parent Component.
     return <button>{children}</button>;    // this is how we used it.
   }
   export default Button;

   Now with this concept we not only can send texts, but we can also send component rendering tag.
*/

/*
-- Tailwind CSS
   In this project, we are going to make use of Tailwind CSS
   
   Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed, low-level utility classes that 
   can be used to build custom web designs quickly and efficiently.

   It provides a comprehensive set of pre-designed classes that cover various aspects of web design, such as layout, 
   typography, colors, borders, and more. With Tailwind CSS, you don't have to write custom CSS for each design element 
   from scratch; instead, you can reuse and combine utility classes to create custom designs.

   Tailwind CSS is highly customizable, and you can easily customize the default set of classes or add new ones to fit 
   your specific design requirements. It can be used with any front-end framework or library, and it doesn't rely on any 
   JavaScript code.

   Overall, Tailwind CSS provides a flexible and efficient way to create custom web designs quickly and easily, without 
   compromising on design quality or scalability.
*/

/*
-- classnames: npm install classnames
   The classnames library is a JavaScript utility library that provides a convenient way to conditionally apply CSS 
   class names to HTML elements.

   It is often used in conjunction with React to dynamically apply CSS classes based on component state or props. 
   Instead of manually constructing class names with string concatenation or interpolation, classnames allows you 
   to easily toggle classes based on boolean or truthy/falsy values. 
*/

/*
-- react-icons: npm install react-icons --save
   React Icons is a popular npm library that provides a set of customizable icons for use in React applications. It offers a wide 
   variety of icons, including popular icon sets such as Font Awesome, Material Design, and Ionicons. React Icons allows developers 
   to easily add icons to their React projects by importing the desired icon component and using it in their JSX code.

   React Icons offers several advantages over using traditional icon libraries. First, because it is built specifically for React, 
   it provides a more streamlined and optimized approach to rendering icons. Additionally, because the icons are all components, 
   they can be easily customized with props to adjust their size, color, and other attributes.

   To use React Icons in your React project, you can simply install the package using npm or yarn and then import the desired icon component.
*/

/*
-- Passing Event Handlers from App.js to Button.js through Component Rendering Tag: Button
   // App.js
   function App() {
    const handleClick = () =>{
      console.log("Clicked!!");
    }
     return (
        <div>
         <Button onClick={handleClick}>     // here we passed the 'handleClick' function through 'onClick' prop
           <GoBell className="mr-1" /> 
           primary
         </Button>
        </div>
     );
   } 

   // Button.js
   function Button({ children, onClick }) {   // here we take that coming 'onClick' prop and used it in below button.

    // here when the button will be clicked 'onClick' prop which contains 'handleClick' will run.
    return <button onClick={onClick} className={classes}>{children}</button>; 
   }

   Downside:
   With using this method, we will have to add prop for every single Event Handlers such as for onMouseOver, onMouseEnter ...
   which is not possible.
   


-- Passing all remaining properties and values(mainly Event Handlers) in form of one object from App.js to Button.js through spread operator
   // App.js
   function App() {
    const handleClick = () =>{
      console.log("Clicked!!");
    }
     return (
        <div>
         <Button onClick={handleClick}>     // here we passed the 'handleClick' function through 'onClick' prop
           <GoBell className="mr-1" /> 
           primary
         </Button>
        </div>
     );
   } 

   // Button.js
   // here we take all the remaining properties and values that are passed down from App.js other than the once 
   // that are already declared and we are putting them in one object 'rest'.
   function Button({ children, ...rest }) { // object 'rest' has 'onClick' in it.  

    // here when the button will be clicked 'rest' object which contains 'onClick' prop will run the 'handleClick' function.
    return <button onClick={onClick} className={classes}>{children}</button>; 
   }
*/
