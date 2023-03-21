import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import './AnimalShow.css'

// In below code, we have created a key:value pair object in which we are saving above images(variables) as values in each keys
const svgMap = {
  // key : value(above images variables)
  bird: bird,
  cat, // An important thing here is, if the names of key and value is same, we can put just one name and javascript will take it as cat:cat
  dog, // same as dog: dog
  gator, // same as gator: gator
  cow, // same as cow: cow
  horse, // same as horse: horse
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      {/* here it will check for the passed 'type' in svgMap object and return the matched key:value pair */}
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img className="heart" src={heart} alt="heart" style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>
  );
}

export default AnimalShow;
