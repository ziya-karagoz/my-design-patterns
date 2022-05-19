import React from "react";

export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <h2>
      Name: {name}, Age: {age} years
    </h2>
  );
};
