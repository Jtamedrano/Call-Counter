import React from "react";

export default (props) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "80%",
      padding: ".5rem 1rem",
      borderBottom: ".1em solid black",
    }}
  >
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button onClick={props.deleteTodo}>x</button>
  </div>
);
