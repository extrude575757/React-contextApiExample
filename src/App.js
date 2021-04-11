import React, { useState, createContext } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export const familyContext = createContext();
console.log(`bk: App.js: familyContext: `, familyContext);

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map((d) => (
          <button
            className={`family-button ${
              d.familyName === activeFamily.familyName && "active"
            }`}
            key={d.familyName}
            onClick={() => setActiveFamily(d)}
          >
            {d.familyName}
          </button>
        ))}
      </section>
      {activeFamily && (
        <familyContext.Provider value={activeFamily}>
          <FamilyTree
            familyName={activeFamily.familyName}
            family={activeFamily}
          />
        </familyContext.Provider>
      )}
    </div>
  );
}
