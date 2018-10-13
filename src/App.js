import React, { Component } from 'react';
import Todos from "./todos"
import Header from "./header"
import Form from "./form";
import "./main.css";


class App extends Component {

  state = {
    todos: [],
  }

  addTodo = (todo) =>{
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
    console.log("heello", this.state);
  }

  deleteTodo = (id) =>{
    let todos = this.state.todos.filter(todo =>{
      return id !== todo.id;
    });
    this.setState({
      todos: todos,
    });
  }

  render() {
    console.log("  inside render", this.state.todos);
    return (
      <div className="App">
        <Header/>
        <Form addTodo = { this.addTodo }/>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
