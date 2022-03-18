import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            todos: []
        }
    }

    removeItem = id => {
        const todosCopy = this.state.todos.filter(item => item.id !== id);
        this.setState({todos: todosCopy});
    }
  
    changeStatus = id => {
        const todosCopy = [...this.state.todos];
        const myItem = this.state.todos.find(item => item.id === id);
        const myItemIndex = this.state.todos.findIndex(item => item.id === id);
        myItem.isDone = !myItem.isDone;
        todosCopy[myItemIndex] = myItem;
        this.setState({todos: todosCopy});
    }

    addTodo = todoItem => {
        this.setState({todos: [...this.state.todos, todoItem]});
    }

    render () {
        return (
            <>
                <h1 className="appTitle">TODO list</h1>
                <TodoForm addTodo={this.addTodo} />
                <TodoList 
                    todos={this.state.todos} 
                    changeStatus={this.changeStatus} 
                    removeItem={this.removeItem}
                />
            </>
        )
    }
}

export default App;