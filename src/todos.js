import React from "react";
import "./main.css";

const Todos = (props) => {
    const {todos} = props;
    const todosList = todos.map(todo => {
        if (todo.id < 50) {
            return (
                <div key={todo.id} className = "todo">
                    <div> id: {todo.id} </div>
                    <div> task: {todo.todo} </div>
                    <div> Time: {todo.time} </div>
                </div>
            );
        }
        else{
            return null;
        }
    });

    return (
        <div>
            {todosList}
        </div>
    );
}

export default Todos;