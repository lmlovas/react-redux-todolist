import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render() {
        return (
            <div className ="todo-list">
                <table className="todo-items table table-borderless">
                  {Object.keys(this.props.items).map(uuid => (
                    <ToDoItem
                    key={`todo-item-${uuid}`}
                    data={this.props.items[uuid]}
                    updateToDoText={this.props.updateToDoText}
                    toggleToDoDone={this.props.toggleToDoDone}
                    removeToDo={this.props.removeToDo}
                    />
                  ))}
                </table>
            </div>
        );
    }
}

export default ToDoList;