import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard"; // Here we have imported the 'ProfileCard' Component to render it into 'App' Component
import AlexaImage from "./images/alexa.png"; // here we have imported the 'alexa.png' from images folder and saved it into 'AlexaImage' variable
import CortanaImage from "./images/cortana.png"; // here we have imported the 'cortana.png' from images folder and saved it into 'CortanaImage' variable
import SiriImage from "./images/siri.png"; // here we have imported the 'siri.png' from images folder and saved it into 'SiriImage' variable

function App() {
  // Here we have called the 'ProfileCard' Component which will return and render it where ever we export 'App' Component.
  return (
    <div>
      {/*  Ways to use images and show on browser */}
      {/* < img src={AlexaImage} />                   Here we have put the above image variable where we imported our images    */}
      {/* < img src="" />                             Here we can put image path or image link as the value of src*/}
      {/* <ComponentName attributeName={variableName} Here we can also put image as a value of attribute to pass to Child component*/}

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns is-centered">
            <div className="column is-3 ">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created buy Amazon and it helps you buy things"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was made by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App; // Because of this line, The 'App' Component can be exported into any other components.
