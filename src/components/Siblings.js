import React, { useContext } from "react";
import SiblingName from "./SiblingName";

import { familyContext } from "../App.js";

const Siblings = () => {
  // const value = useContext(familyContext);
  // console.log(`bk: Siblings.js: value: `, value);
  const family = useContext(familyContext);

  // <></> , <React.Fragment></React.Fragment>
  return (
    <section className="parents">
      {family.siblings.map((p) => {
        const superstar = family.superstars.includes(p.name.toLowerCase());
        return (
          <div className="person" key={p.name}>
            <img width="150" src={p.img} alt={p.name} />
            <SiblingName name={p.name} superstar={superstar} />
          </div>
        );
      })}
    </section>
  );
};

export default Siblings;
