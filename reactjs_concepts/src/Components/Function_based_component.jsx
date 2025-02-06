import React, { useState } from "react";

function Function_based_component() {
  const [showText, setshowText] = useState("false");

  function handletext() {
    setshowText(!showText);
  }

  return (
    <div>
      {/* inline Css->style={{ color: "red" }} */}
      <h2 style={{ color: "red" }}>{showText ? "function Component" : null}</h2>
      <button onClick={handletext}>Click Me</button>
    </div>
  );
}

export default Function_based_component;
