import React, { Component } from "react";
import TodoForm from "./subComp/TodoForm";
import TodoItem from "./subComp/TodoItem";

export default class Todo extends Component {
  state = {
    todos: [],
    todoToShow: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeAllTodosThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
        }}
      >
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            deleteTodo={() => this.deleteTodo(todo.id)}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            Todos Left:{" "}
            {this.state.todos.filter((todo) => !todo.complete).length}
          </div>
          <div className="buttonRack">
            <button onClick={() => this.updateTodoToShow("all")}>all</button>
            <button onClick={() => this.updateTodoToShow("active")}>
              active
            </button>
            <button onClick={() => this.updateTodoToShow("complete")}>
              complete
            </button>
          </div>
          {this.state.todos.some((todo) => todo.complete) ? (
            <div>
              <button onClick={() => this.removeAllTodosThatAreComplete()}>
                remove completed items
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
