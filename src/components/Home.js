import React from "react";
import { name, city } from "../data/data.js";



const MyComponent = () => {
  const headingStyle = {
    color: 'firebrick',
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello, World!</h1>
    </div>
  );
};




function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={{color: "firebrick"}}>
      {name} is a Web Developer from {city}
      </h1>
  </div>
  );
}

export default Home;

