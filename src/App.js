import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#51c4d3").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      // console.log(colors);
    } catch (error) {
      setError(true);
      // console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>tints and shades generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#51c4d3"
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
        <h4 style={{ marginLeft: "2rem" }}>Click the color to copy!!</h4>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
