import React, { Component } from 'react';
import Todos from "./todos"
import Header from "./header"
import Footer from "./footer";
import Form from "./form";
import "./main.css";


class App extends Component {

  state = {
    todos: [
      { id: 1, todo: "Go to burger king", time: "6:00 PM"},
      { id: 2, todo: "Study React", time: "8:00 PM"},
      { id: 3, todo: "Sleep", time: "10.00 PM"},
      { id: 4, todo: "Go to burger king", time: "6:00 PM"},
    ],
  }

  addTodo = (todo) =>{
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
    console.log("heello", this.state);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Form addTodo = { this.addTodo }/>
        <Todos todos = {this.state.todos} />
        <Footer/>
      </div>
    );
  }
}

export default App;
