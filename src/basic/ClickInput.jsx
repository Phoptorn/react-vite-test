import React, { useState } from "react";

function ClickInput() {
  const [value, setValue] = useState("");
    const [searched, setSearched] = useState("");
    
    const clearInput = () => {
        setValue("");
        setSearched("");
    }

  return (
    <div className="ShowInput">
      <h2>ShowInput</h2>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => setSearched(value)}>show</button>
            <button onClick={clearInput}>clear</button>
      </div>
      <h4>show: {searched}</h4>
    </div>
  );
}

export default ClickInput;