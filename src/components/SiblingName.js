import React from "react";
// import { useContext } from "react";

/* -- use context api
   
 */

// import { familyContext } from "../App";

const SiblingName = (props) => {
  // const family = useContext(familyContext);

  // const starPower = family.superstars.includes(props.name.toLowerCase());
  return (
    <>
      <strong>
        {props.superstar ? "*" : ""}
        {props.name}
        {props.superstar ? "*" : ""}
      </strong>
    </>
  );
};

export default SiblingName;
