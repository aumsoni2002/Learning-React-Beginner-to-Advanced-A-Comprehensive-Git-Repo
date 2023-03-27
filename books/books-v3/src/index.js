import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "./context/books";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />                         {/*here the App Component and its children components will have access to the object 'valueToShare'*/}
  </Provider>
);


/*
In above code, we have put 'App' Component tag in between the opening and closing 'Provider' tag.
Now this 'App' component tag works as a prop which will go into books.js than into function Provider as 'children' prop.
Now we are putting that 'children' prop between the opening and closing 'BookContext.Provider' tag.
With this method we can make use of 'BookContext' object into App and its child componets. 
*/