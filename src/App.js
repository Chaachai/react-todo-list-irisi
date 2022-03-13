import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {

    const [todos, setTodos] = React.useState([])

    const removeItem = id => {
        const todosCopy = todos.filter(item => item.id !== id);
        setTodos(todosCopy);
    }
  
    const changeStatus = id => {
        const todosCopy = [...todos];
        const myItem = todos.find(item => item.id === id);
        const myItemIndex = todos.findIndex(item => item.id === id);
        myItem.isDone = !myItem.isDone;
        todosCopy[myItemIndex] = myItem;
        setTodos(todosCopy);
    }

    const addTodo = todoItem => {
        setTodos([...todos, todoItem]);
    }

    return (
        <>
            <h1 className="appTitle">TODO list</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                changeStatus={changeStatus} 
                removeItem={removeItem}
            />
        </>
    )  
}

export default App;