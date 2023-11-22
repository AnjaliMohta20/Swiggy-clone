import React from "react";
import Profile from "./ProfileClass";

class About extends React.Component {
  render(){
    return (
      <>
        <div>About</div>
        <p>
          {""}
          About Us Page
        </p>
        <Profile name={"Anjali"} />
      </>
    );
  }
}

export default About;
