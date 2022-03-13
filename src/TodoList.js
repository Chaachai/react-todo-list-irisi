import TodoItem from "./TodoItem";

const TodoList = props => {
    return (
        <div className="myList" >
                {props.todos.length > 0 ? props.todos.map(item => 
                    <TodoItem 
                        key={item.id} 
                        name={item.title} 
                        isDone={item.isDone} 
                        changeStatus={() => props.changeStatus(item.id)} 
                        removeItem={() => props.removeItem(item.id)} 
                    />
                 )
                 :
                     <p className="emtyListMessage"> Add some task to your list! </p>
                 }
            </div>
    )
}

export default TodoList;