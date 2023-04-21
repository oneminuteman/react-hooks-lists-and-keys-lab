
import React from 'react';

function Person({ name, age }) {
  return <div>{name} ({age})</div>;
}

function PeopleList({ people }) {
  return (
    <div>
      {people.map(person => (
        <Person key={person.id} name={person.name} age={person.age} />
      ))}
    </div>
  );
}

// example usage
function App() {
  const people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];
  return <PeopleList people={people} />;
}
