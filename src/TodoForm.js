import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: ''
        }
    }

    handleNameChange = event => {
        this.setState({todoName: event.target.value})
    }

    addTodo = event => {
        event.preventDefault();
        if(this.state.todoName.trim() !== '') {
            const randomId = parseInt(Math.random()*100, 10);
            const item = {id: randomId, title: this.state.todoName, isDone: false}
            this.props.addTodo(item);
            this.setState({todoName: ''})
        }
    }

    render(){
        return (
        <form className="addForm">
            <input 
                className="addField"
                placeholder="Task name"
                onChange={this.handleNameChange} 
                value={this.state.todoName} />
                
            <button className="addBtn" type="submit" onClick={this.addTodo}> Add </button>
        </form>
        )
    }
}

export default TodoForm;