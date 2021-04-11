import React from "react";

import { familyContext } from "../App";

const Parents = (props) => {
  // return (
  // <section className="parents">
  //   {props.family.parents.map((p) => (
  //     <div className="person" key={p.name}>
  //       <img width="150" src={p.img} alt={p.name} />
  //       <strong>{p.name}</strong>
  //     </div>
  //   ))}
  // </section>
  // );
  return (
    <familyContext.Consumer>
      {({ parents }) => {
        return (
          <section className="parents">
            {parents.map((p) => (
              <div className="person" key={p.name}>
                <img width="150" src={p.img} alt={p.name} />
                <strong>{p.name}</strong>
              </div>
            ))}
          </section>
        );
      }}
    </familyContext.Consumer>
  );
};

export default Parents;
