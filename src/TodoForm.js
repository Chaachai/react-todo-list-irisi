import React from "react";

const TodoForm = props => {

    const [todoName, setTodoName] = React.useState('');

    const handleNameChange = event => {
        setTodoName(event.target.value);
    }

    const addTodo = (event) => {
        event.preventDefault();
        if(todoName.trim() !== '') {
            const randomId = parseInt(Math.random()*100, 10);
            const item = {id: randomId, title: todoName, isDone: false}
            props.addTodo(item);
            setTodoName('');
        }
    }
    
    return (
        <form className="addForm">
            <input 
                className="addField" 
                type='text' 
                placeholder="Task name"
                onChange={handleNameChange} 
                value={todoName} />
            <button 
                className="addBtn" 
                type="submit"
                onClick={addTodo}
            > Add </button>
        </form>
    )
}

export default TodoForm;