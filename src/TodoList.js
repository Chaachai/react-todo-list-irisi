import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    render(){
        return (
            <div className="myList" >
                {this.props.todos.length > 0 ? this.props.todos.map(item => 
                    <TodoItem 
                        key={item.id} 
                        name={item.title} 
                        isDone={item.isDone} 
                        changeStatus={() => this.props.changeStatus(item.id)} 
                        removeItem={() => this.props.removeItem(item.id)} 
                    />
                    )
                    :
                    <p className="emtyListMessage"> Add some tasks to your list! </p>
                }
            </div>
        )
    }
}

export default TodoList;