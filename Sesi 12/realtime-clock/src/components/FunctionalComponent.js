import React, { useState } from "react";

function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  setInterval(() => tick(), 1000);
  return (
    <div className="App">
      <h1>Realtime CLOCK using Functional Component</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
      <h1>{date.toLocaleDateString()}</h1>
    </div>
  );
}

export default FunctionalComponent;
