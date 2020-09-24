import React, { Component } from "react";
import "./Home.css";
import Todo from "./Components/Todo";

class Counter extends Component {
  state = {
    newLead: 0,
    outBound: 0,
  };

  render() {
    return (
      <div className="counter">
        <div className="counter_container">
          <div className="counters">
            <div className="lineOne">
              <div className="counter_item">
                <strong>Leads Called</strong>
                <p>{this.state.newLead}</p>
              </div>
              <div className="counter_item">
                <strong>Total Calls</strong>
                <p>{this.state.outBound}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              this.setState({
                newLead: this.state.newLead + 1,
                outBound: this.state.outBound + 1,
              })
            }
          >
            New Lead
          </button>

          <button
            onClick={() => this.setState({ outBound: this.state.outBound + 1 })}
          >
            Outbound
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
          <h2>Outbound Calls</h2>
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
          <Todo />
          <CounterBox />
        </div>
      </div>
    );
  }
}
