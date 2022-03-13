
const TodoItem = props => {
    return (
        <div className="myItem" >
            <p style={{textDecoration: props.isDone ? 'line-through' : ''}}>{props.name}</p>
            <div>
                <button className="checkBtn" onClick={props.changeStatus}>&#10004;</button>
                <button className="removeBtn" onClick={props.removeItem}>&#10005;</button>
            </div>
        </div>
    )
}

export default TodoItem;