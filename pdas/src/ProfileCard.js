// This is a Component by the name 'ProfileCard' which will get imported into 'App' Component.

function ProfileCard(props) {
  // below statement will get return on rendering 'ProfileCard' Component
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={props.image} alt="a PDA Logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">Title is: {props.title}</p>
          <p className="subtitile is-6">Handle is: {props.handle}</p>
        </div>
        <div className="content">{props.description}</div>
      </div>
    </div>
  );
}

export default ProfileCard; // Because of this line, The 'ProfileCard' Component can be exported into any other components.

// -- Props System:                     Parent ----> Props ----> Child
//    Pass Data from a Parent to Child
//    Allows Parent to configue each Child differently(show different text, different styles etc)
//    one way flow of data. Child cannot push props back up that is we can only send data from Parent to Child. Not the other way around
//    Props covers around 25 percent understanding of React

//    Steps to create a communication between Parent and Child with Props
// 1. Add attributes to Component Rendering Tag which we have put into our 'App' Component: function App(){ return <ProfileCard color="red"/> }
// 2. React collects the attribute and put them in an object
// 3. Props object shows up as the first argument to the Child Component function:          function ProfileCard(props) { }
// 4. We then use the props however we need: function ProfileCard(props) { return <div>{props.color}</div> }

// Using Argument Destructuring
// As you can see in above code, to pass receive data from Parent to Child, we have to write 'props.' in every statements, which is repetitive.
// To remove this repetition, we can make use of const variables or Argument Desctructuring.
// function ProfileCard(props) {
//
//     const title = props.title;               // const variable Method
//     const handle = props.handle;
//
//     or
//
//     const { title, handle } = props;         // Argument Destructuring
//     return (
//     <div>
//       <div>Title is: {title}</div>
//       <div>Handle is: {handle}</div>
//     </div>
//   );
// }
//
//     or
//
// function ProfileCard({title, handle}}) {    // Direct Argument Destructuring
//
//     return (
//     <div>
//       <div>Title is: {title}</div>
//       <div>Handle is: {handle}</div>
//     </div>
//   );
// }
