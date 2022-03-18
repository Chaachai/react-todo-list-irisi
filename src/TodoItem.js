import { Component } from "react";

class TodoItem extends Component {
    render(){
        return (
            <div className="myItem" >
                <p style={{textDecoration: this.props.isDone ? 'line-through' : ''}}>{this.props.name}</p>
                <div>
                    <button className="checkBtn" onClick={this.props.changeStatus}>&#10004;</button>
                    <button className="removeBtn" onClick={this.props.removeItem}>&#10005;</button>
                </div>
            </div>
        )
    }
}

export default TodoItem;