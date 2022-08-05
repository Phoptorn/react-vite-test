import React, { useState } from 'react'

const users3 = [
    {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        username: 'jdoe',
        tel: '555-555-1111'
    },
    {
        id: 2,
        name: 'Jane',
        lastname: 'Doe',
        username: 'jane',
        tel: '555-555-2222'
    },
    {
        id: 3,
        name: 'Jack',
        lastname: 'Doe',
        username: 'jack',
        tel: '555-555-3333'
    }
];

function SearchOne() {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState("");

  const shoot = () => {
    for (var i in users3) {
      if (value === users3[i]["username"]) {
        setSearched(users3[i]["username"]);
        break;
      } else {
        setSearched("ไม่พบ");
      }
    }
  };

  return (
    <div className="SearchOne">
      <h2>SearchOne</h2>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={shoot}>show</button>
      </div>
      <h4>person3: {searched}</h4>
    </div>
  );
}

export default SearchOne;
   