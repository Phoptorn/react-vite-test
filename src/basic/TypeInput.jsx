import React, { useState } from "react";

function TypeInput() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <p>{input}</p>
    </div>
  );
}
export default TypeInput;