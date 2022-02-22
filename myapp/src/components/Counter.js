import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
s
  increaseCount() {
    // call setState to change the state, otherwise the ui render wont happen.
    // thats the reason we dont change the state directly. 
    // this.state.count = this.state.count + 1; => React will not render the UI
    this.setState(
      { count: this.state.count + 1 },
      //callback function to handle code that needs to be executed after the state is updated.
      () => {
          console.log('count from callback :', this.state.count) // value here is 1}
      }
    );
    
    // if we want to increment based on the previous state
    this.setState(
      (prevState) => {this.count = prevState + 1},
    )
      console.log(this.state.count); // value here is 0, because call to setState is asynchronous.
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increaseCount(this.state.count)}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;