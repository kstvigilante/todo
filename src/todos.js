import React from "react";
import "./main.css";

const Todos = ({todos, deleteTodo}) => {
    
    const todosList = todos.map(todo => {
            return (
                <div key={todo.id} className = "todo">
                    <div className = "task"> {todo.todo} </div>
                    <div className = "time"> {todo.time} </div>
                    <button onClick = {()=> {deleteTodo(todo.id)}} className = "click">delete</button>
                </div>
            );
    });

    if(todosList.length !== 0){
        return (
            <div> {todosList} </div>
        );
    }
    else{
        return(
            <div className = "noTodo">You have nothing to do!!</div>
        );
    }
}

export default Todos;