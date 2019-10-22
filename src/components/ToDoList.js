import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render() {
        return (
            <div className ="todo-list">
                <table className="todo-items table table-borderless">
                  <tbody>
                  {Object.keys(this.props.items).map(uuid => (
                    <ToDoItem
                    key={`todo-item-${uuid}`}
                    data={this.props.items[uuid]}
                    updateToDoText={this.props.updateToDoText}
                    toggleToDoDone={this.props.toggleToDoDone}
                    removeToDo={this.props.removeToDo}
                    />
                  ))}
                  </tbody>
                </table>
            </div>
        );
    }
}

export default ToDoList;