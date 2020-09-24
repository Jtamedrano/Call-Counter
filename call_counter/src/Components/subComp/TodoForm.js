import React, { Component } from "react";
import shortid from "shortid";

export default class TodoForm extends Component {
  state = {
    text: "",
    hour: "",
    min: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.textFormat(),
      complete: false,
    });
    this.setState({
      text: "",
      hour: "",
      min: "",
    });
  };

  textFormat = () => {
    if (this.state.hour + ":" + this.state.min === ":") {
      console.log("time is empty");
      return `${this.state.text}`;
    } else {
      return `${this.state.text} at ${this.state.hour}:${this.state.min}`;
    }
  };

  render() {
    return (
      <div
        style={{
          margin: "2rem",
          width: "80%",
        }}
      >
        <form
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
          onSubmit={this.handleSubmit}
        >
          <input
            style={{
              flex: 1,
            }}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="todo..."
            required
          />
          <input
            style={{
              width: "30px",
            }}
            type="number"
            name="hour"
            value={this.state.hour}
            onChange={this.handleChange}
            minLength={2}
            maxLength={2}
            placeholder="hh"
          />
          <input
            style={{
              width: "30px",
            }}
            type="number"
            name="min"
            value={this.state.min}
            onChange={this.handleChange}
            minLength={2}
            maxLength={2}
            placeholder="mm"
          />
          <button onClick={this.handleSubmit}>Add Todo</button>
        </form>
      </div>
    );
  }
}
