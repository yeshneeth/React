import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      date: new Date(),
    };
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      date: date,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleNameChange}
          />
        </div>
        <div> </div>
        <div>
          <label>VisitedDate</label>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
            closeOnScroll={true}
            // minDate={this.state.date}
            // inline
            popperPlacement="auto"
            showMonthYearDropdown
            useShortMonthInDropdown
          />
        </div>
      </form>
    );
  }
}

export default Form;
