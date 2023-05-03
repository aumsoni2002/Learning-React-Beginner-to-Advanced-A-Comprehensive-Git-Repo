/*
This Button Component is going to be a Resuable Component that returns a simple plain button.
And to customize this plain button as per 'Button Theory' we are going to use differnet props with boolean values.   
*/
import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  // this 'rest' object contains all remaining properties and values(mainly event handlers) that has been passed from App.js to this component
  ...rest
}) {
  const classes = classNames(rest.className, "flex items-center px-3 py-1.5 border", {
    // rest.className: this is what when user applied classes on the Component Rendering Tag 'Button'. as we used '...rest', 'className' prop is in it.
    // Now I want these classes always applied, that is why I put them here as first argument.
    // these all 'keys' will be applied only if their 'value' is true.
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary, // apply if both are true. and this css will override above 'text-white' css, if applied.
    "text-gray-500": outline && secondary, // apply if both are true. and this css will override above 'text-white' css, if applied.
    "text-green-500": outline && success, // apply if both are true. and this css will override above 'text-white' css, if applied.
    "text-yellow-500": outline && warning, // apply if both are true. and this css will override above 'text-white' css, if applied.
    "text-red-500": outline && danger, // apply if both are true. and this css will override above 'text-white' css, if applied.
  });
  return (
    <button {...rest} className={classes}>  {/*all event handlers that are in 'rest' will be called once user click this button*/}
      {children}
    </button>
  ); // getting the text from App Component through this children prop
}

Button.propTypes = {
  // here we are creating a custom validation function to check only one prop is passed as true.
  // as we need to check for this five props, we need to destructure them here
  checkButtonVariation: ({ primary, secondary, success, warning, danger }) => {
    /* The logic to check that only one out of above five props is passed as true, is by checking if the
           total number of values of this props should not be more than 1.
           As we are passing boolean values, we need to convert those boolean values into numbers
           that can be done with below JavaScript function:
           Number(true)  = 1
           Number(false) = 0

           Another thing here is that, while sending props with boolean as values, below both ways are similar with eachother
           primary={true} is same as primary
           but for false, we can only send this value with one method: primary{false}.

           As it is not good method to send 'false' for every variation that we are not using, we will just not send it.
           And when we do not send a prop, its value will be NaN. So to convert it into numbers, we need below way:
           Number(!!NaN)  = 0
           Number(!!true) = 1
           This is why we will use two exclamation mark method because we will not send those props that we will not use.
        */
    const numOfTrues =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (numOfTrues > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning and danger can be true"
      );
    }
  },
};

export default Button;

/*
-- Some Button Theory
   Button Purpose                                               Short Name                      Color
   Draw user's attention to a good action                       Primary                         Blue
   Draw user's attention to a kind of good action               Secondary                       Black
   Tell the user something good just happened                   Success                         Green
   Warn the user about something                                Warning                         Yellow
   Tell the user they are about to do something dangerous       Danger                          Red

   Button Variation
   Standard, Rounded, Outline and Outlined-Rounded
*/

/*
-- Props Design
   Now as we are returing only plain button, we need to customize it through passing 
   boolean values with the help of different props.

   Prop Name        Type        Purpose
   primary          boolean     change styling  |
   secondary        boolean     change styling  |
   success          boolean     change styling  |while using these first 5 props, we need to make sure that only one stays true at a time.   
   warning          boolean     change styling  |
   danger           boolean     change styling  |
   outline          boolean     change styling
   rounded          boolean     change styling
*/

/*
-- prop-types: npm install prop-types
   This is a JavaScriptLibrary which is used to validate props that get passed into our component.
   It checks if someone passes down the incorrect kind of value (number instead of boolean), a warning will appear in console.
   Let us look at one Example:
   import PropTypes from 'prop-types';
   function Card({title, content, showImage}){  // we will validate all props that are coming through prop-types
     ...
   }
   Card.propTypes = {                           // Required Syntax
    title: PropTypes.string.isRequired,         // 2 validations: value must be a string, value must be provided
    content: PropTypes.string,                  // 1 validation: must be a string
    showImage: PropTypes.bool                   // 1 validation: must be a string
   };
   
   There is one more feature in 'prop-types' library that is we can also create custom prop validation function
   Which will be needed here to make sure that only one out of five prop is passed with value true. And if 2 or more than 2
   is passed as true, it will throw an error.
*/

/*
-- classnames: npm install classnames
   The classnames library is a JavaScript utility library that provides a convenient way to conditionally apply CSS 
   class names to HTML elements.

   It is often used in conjunction with React to dynamically apply CSS classes based on component state or props. 
   Instead of manually constructing class names with string concatenation or interpolation, classnames allows you 
   to easily toggle classes based on boolean or truthy/falsy values. 

   Example:
   import classNames from 'classnames';
   1.
   const finalClassName = classNames('px-3', 'py-1.5', 'bg-blue-500');      // here we passed 3 strings. 
   console.log(finalClassName);     // 'px-3 py-1.5 bg-blue-500'

   2.
   const finalClassName = classNames({  // here we passed a object which contains key:value pairs.
     'px-3': true,                      // Now I had to use single quote to write keys because the class names had dashes in them.
     'py-1.5': false, 
     'bg-blue-500': true,
   });       
   console.log(finalClassName);     // 'px-3 bg-blue-500'

   3.
   const finalClassName = classNames('py-1.5', {    // this class will always be saved in this variable.  
     'px-3': true,                      
     'bg-blue-500': true,
   });       
   console.log(finalClassName);     // 'py-1.5 px-3 bg-blue-500'
*/
