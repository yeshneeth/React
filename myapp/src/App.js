import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetWithProps from './components/GreetWithProps';
import WelcomeClassProps from './components/WelcomeClassProps';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBinder from './components/EventBinder';
import ParentComponent from './components/Parent';
import ListRender from './components/ListRender';
import StyleSheet from './components/StyleSheet';
import Inline from './components/inline';
import Form from './Forms/Form'

function App() {
  return (
    <div className="App">
      <Form />
      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <ListRender /> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBinder></EventBinder> */}
      {/* <Counter /> */}
      {/* <Message></Message> */}
      {/* <Greet /> */}
      {/* <Hello /> */}
      {/* <Welcome /> 
      <GreetWithProps name="Raghu" birthCity="Kurnool">
        <p>This is children props</p>
      </GreetWithProps>
      <GreetWithProps name="Mayukh" birthCity="San Antonio" >
        <button>Action</button>
      </GreetWithProps>
      <GreetWithProps name="Ronak" birthCity="Carmel" /> */}

      {/* Sending props with a class component */}
      {/* <WelcomeClassProps name="Raghu"/> */}
    </div>
  );
}

export default App;
