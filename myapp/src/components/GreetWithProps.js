import React from 'react';

const GreetWithProps = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} born in {props.birthCity}
      </h1>
      {props.children}
    </div>
  );
};

export default GreetWithProps;
