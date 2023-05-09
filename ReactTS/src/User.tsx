import React, { FC } from 'react';

interface UserProps {
  name: string;
  age: number;
}

const User: FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
}

export default User;
