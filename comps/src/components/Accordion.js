import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // the below function 'handleClick' function has a parameter 'renderedItemsIndex'.
  // the body of below function is just setting the value of 'expandedIndex' that is coming as the function's parameter.
  const handleClick = (renderedItemsIndex) =>{
    if(expandedIndex === renderedItemsIndex){
      setExpandedIndex(-1);
    }else{
      setExpandedIndex(renderedItemsIndex);
    }
  }
  
  // here with the help of 'map' function, we are going through each element of the 'items' array of object and showing that object's
  // key: value pair's 'values' in the form of JSX.
  const renderedItems = items.map((item, index) => {
    // In below variable, it will check for every item's index value and if it matches, true will be saved and 
    // if not, false will be saved
    const isExpanded = index === expandedIndex;    

    // Displaying Icon as per the value of isExpanded
    const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

    // here we will use conditional rendering concept. the variable 'content' will change as per the value of isExpanded. 
    // the '<div>{item.content}</div>' always stays true. 
    // && gives back the first falsey value or the last truthy value
    const content = isExpanded && <div className="border-b p-5" >{item.content}</div> // if isExpandes is true, the div part is going to be saved and it will be shown on screen.
    
    // This whole 'return' statement is running for 3 times as there are 3 elements in 'items' while mapping through it.
    // Each return statement will have increasing index value starting from 0.
    // As we have put an onClick event handler on the section heading where we are setting 'index' value to expandedIndex,
    // All the 3 headings that we see on the screen will have this onClick event handler and will set the value as per its 'index' value.
    // Such as: heading 1 has an index value '0', so clicking on heading 1, expandedIndex's value will be set to '0'.
    // same with heading 2 which has index value '1' and heading 3 which has index value '2'
    return ( 
      <div key={item.id}> {/* The 'key' here is neccessary to be given to each item while returing it. */}
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=> handleClick(index)} > {/*here we are sending 'index' value as an argument*/}
          {item.label}
          {icon}    
        </div> 
        {content}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;

/*
-- State Design Process Overview -- Accordion
   Events + State Design Process
   1. List out what a user will do and changes they will see while using our app (What state + event handlers are there?)
      • How would a user describe using this app step by step?
        consider there are 3 sections, first is expanded and other two are collaped.
        Now when the user clicks on second section, it gets expanded, first gets collapsed and third was already collapsed.

   2. Categorize each step as 'state' or ‘event handler’ (What state + event handlers are there?)
      • User sees something on the screen change: collapse/expand 
        We probably need 'state' to implement this step
      • User committed some action: click
        We probably need 'event handler' to implement this step   

   3. Group common steps. Remove duplicates. Rewrite descriptions (What state + event handlers are there?)
      • Click           -- event handler
      • collapse/expand -- state

   4. Look at mockup. Remove or simplify parts that are not changing (what name and type?)
      • label text is not changing 
      • content text is not changing

   5. Replace remaining elements with text descriptions (what name and type?)
      • Simple Text Description for sections that get collapse and expand
        Section 1: Expanded  
        Section 2: Collapsed
        Section 3: Collapsed

   6. Repeat step 4 and 5 with a different variation (what name and type?)
      • Variation 2
        Section 1: Collapsed  
        Section 2: Collapsed
        Section 3: Expanded
       
      • Variation 3, 4, ...  

   7. Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props, what
      other arguments would you need? (what name and type?)
      • How the function will look like
        function myFunction(items, expandedIndex){
          return items.map((item, index) =>{
            if(index === expandedIndex){
              return 'Expanded';
            }
            else{
              return 'Collapsed';
            }
          });
        }

        myFunction(propsItems, 0);   // ['Expanded', 'Collapsed', 'Collapsed'];
        myFunction(propsItems, 2);   // ['Collapsed', 'Collapsed', 'Expanded']; 

        state name: expandedIndex
        state type: number

   8. Decide where each event handler + state will be defined?
      • Does any component besided Accordion reasonably need to know which item is expanded?
        Yes: Define in App component
        No:  Define in Accordion component
        Here in our case, the answer is No. We do not need any other component to show or use 'expandedIndex' other than Accordion.

        Event handler should usually be defined in same component as state it modifies but it might be used in different component
        
        Accordion Component will have:
        state:          expandedIndex(number)
        Event Handler:  handleClick
 */

/*
-- Conditional Rendering
   • React does not print booleans, nulls and undefined
     "aum"      --  'aum' is printed on screen.
     12         --     12 is printed on screen
     true       --   true is not printed on screen.
     false      --   true is not printed on screen.
     undefined  --   true is not printed on screen.

   • JS Boolean Expressions
     || gives back the first value that is truthy
     Example:
     'hi'   ||  'there'     --      'hi'
     false  ||  'there'     --      'there'
     0      ||  true        --      true
     50     ||  null        --      50
     100    ||  200         --      100

     && gives back the first falsey value or the last truthy value
     Example:
     'hi'   &&  'there'     --      'there'
     false  &&  'there'     --      'false'
     0      &&  true        --      0
     50     &&  null        --      null
     100    &&  200         --      200
*/

/*
-- Event Handler
   • How it should works in this project
   If user clicks on section 1 heading, we want to run setExpandedIndex(0). So that we can see content of section 1.
   If user clicks on section 2 heading, we want to run setExpandedIndex(1). So that we can see content of section 2.
   If user clicks on section 3 heading, we want to run setExpandedIndex(2). So that we can see content of section 3.
   
   • Inline Event Handler
   <div onClick={()=> setExpandedIndex(index)} >{item.label}</div>

   • Normal Event Handler [Below both things should be in same scope that is should be in same curly brackets]
   const handleClick = () =>{
    setExpandedIndex(index)
   }
   <div onClick={()=> handleClick()} >{item.label}</div>

   • Mix both above Event Handler [Below both things does not require to be in same scope as we have put a parameter to be used.]
   const handleClick = (renderedItemsIndex) =>{
    setExpandedIndex(renderedItemsIndex)
   }
   <div onClick={()=> handleClick(index)} >{item.label}</div>
*/

/*
-- Functional State Updates:   Video 188 and 189
   Use this method only when we have to do a conditional update to our state that depends upon the old value of htat same state. 

   const handleClick = (renderedItemsIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (expandedIndex === renderedItemsIndex) {
        return -1;
      } else {
        return renderedItemsIndex;
      }
    })
   }
*/