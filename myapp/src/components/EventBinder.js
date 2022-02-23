import React, { Component } from 'react';

// approach 1: binding this in the render function as this.clickHandler.bind(this) - not recomended
// approach 2: binding in render () through aroow function : {() => this.clickHndler()}
// below two are the recommended
// approach 3: binding this in the constructor method. this.clickHandler = this.clickHandler.bind(this)
// approach 4: bindind through class property functions
//    clickHandler = () => {this.setState({message: 'See you again!'})}

class EventBinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello Raghunath!',
    };
    // approach 3 of binding this
    this.clickhandler = this.clickhandler.bind(this);
  }

  clickhandler() {
    this.setState({ message: 'See you again!' });
    console.log(this);
  }

  // approach 4 of binding this is making the event handler a class property functions
  clickHandler = () => {
    this.setState({ message: 'See you again!' });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* below is one way of binding this of event handler with that of the class. 
        has performance issues
        <button onClick={this.clickhandler.bind(this)}>Click me</button> */}
        {/*
        approach 2: is using arrow functions -> a callback 
        has performance issue in some scenarios*/}
        {/* <button onClick={() => this.clickhandler()}>Click me</button> */}
        {/* approach 3: binding this in the constructor method*/}
        {/* <button onClick={this.clickhandler}>Click me</button> */}
        {/* approach 4: binding through class property functions */}
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default EventBinder;
