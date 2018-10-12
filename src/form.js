import React from "react";
import "./main.css";
class Form extends React.Component{

    state = {
        id: null,
        todo: null,
        time: null
    }

    constructor(props){
        super(props)
        console.log("");
    }

    handleTodo = (e) =>{
        this.setState({
            id: new Date().valueOf(),
            todo: e.target.value
        });
        console.log(this.state);
    }

    handleTime = (e) =>{
        this.setState({
            id: new Date().valueOf(),
            time: e.target.value
        });
        console.log(this.state);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            id: new Date().valueOf()
        });
        console.log("state: ",this.state);
        console.log("inside handle submit");
        this.props.addTodo(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit = { this.handleSubmit }>
                    <p>Todo:</p>
                    <input type = "text" id = "todo" onChange = { this.handleTodo }/>
                    <p>Time:</p>
                    <input type = "text" id = "time"  onChange = { this.handleTime }/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default Form;