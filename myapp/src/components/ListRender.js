import React, { Component } from 'react';
import Person from './Person';

class ListRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'here is a list...',
    };
  }

  render() {
    const names = ['Bruce', 'Clark', 'Diana'];
    // const nameList = names.map((name) => <h2>{name}</h2>);
    // return (
    //   <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    //   </div>
    // );
    // return <div>{nameList}</div>;

    //example for complex lists -> split the jsx into a separate component
    const persons = [
      { id: 1, name: 'Raghu', age: 40, skill: 'Architect' },
      { id: 2, name: 'Phani', age: 35, skill: 'WorkBrain' },
      { id: 3, name: 'Rami K', age: 39, skill: 'Data Science' },
    ];

    const personList = persons.map((person) => (
      <Person key={person.id} person={person}></Person>
      // we passed the person object as prop to the JSX component Person.js
    ));

    return <div>{personList}</div>;
  }
}

export default ListRender;
