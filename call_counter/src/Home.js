import React, { Component } from "react";
import "./Home.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="counter">
        <div className="counter_container">
          <button
            onClick={() =>
              this.state.count > 0
                ? this.setState({ count: this.state.count - 1 })
                : 0
            }
          >
            -
          </button>
          <p>{this.state.count}</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

class CounterBox extends Component {
  render() {
    return (
      <div className="counterBox">
        <div className="counterBox_container">
          <Counter />
        </div>
      </div>
    );
  }
}

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home_container">
          <CounterBox />
        </div>
      </div>
    );
  }
}
