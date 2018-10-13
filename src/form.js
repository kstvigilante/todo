import React from "react";
import "./main.css";
class Form extends React.Component {

    state = {
        id: null,
        todo: null,
        time: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            id: new Date().valueOf(),
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id: new Date().valueOf()
        });
        console.log("state: ", this.state);
        this.props.addTodo(this.state);
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <p>Todo:</p>
                    <input type="text" id="todo" onChange={this.handleChange} required/>
                    <p>Time:</p>
                    <input type="text" id="time" onChange={this.handleChange} required/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default Form;