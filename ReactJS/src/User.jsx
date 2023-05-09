import React from 'react';

const User = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
}

export default User;