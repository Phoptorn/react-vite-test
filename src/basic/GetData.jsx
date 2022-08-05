import React, { Component } from 'react'
// import PropTypes from 'prop-types'

const users = [
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

function GetData() {
  const buttonClick = () => {
    console.log(JSON.stringify(users));
    document.getElementById('users').innerHTML = JSON.stringify(users);
    }
    const clearClick = () => {
        document.getElementById('users').innerHTML = '';
    }

  return (
    <div className="GetData">
      <h2>GetData</h2>
          <button onClick={buttonClick}>Get</button>
            <button onClick={clearClick}>Clear</button>
          <div id="users"></div>
    </div>
  )
}   
export default GetData;