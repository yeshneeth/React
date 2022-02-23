import React from 'react';

// we destructured the object as {person}. otherwise it would be props
// and we could destructure as {name, age, skill} = props
function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. My skill is{' '}
        {person.skill}
      </h2>
    </div>
  );
}

export default Person;
