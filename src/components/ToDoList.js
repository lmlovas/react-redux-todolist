import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
  filteredItems = () => {
    const filtered = [];

    for (const uuid in this.props.items) {
      const item = this.props.items[uuid];

      if (
        this.props.filter === 'all' || (this.props.filter === 'done' && item.done === true) ||
        (this.props.filter === 'undone' && item.done === false)
      ){
        filtered.push(item);
      }
    }
    return filtered;
  };

    render() {
        return (
            <div className ="todo-list">
                <table className="todo-items table table-borderless">
                  <tbody>
                    {this.filteredItems().map(item => (
                       <ToDoItem
                       key={`todo-item-${item.uuid}`}
                       data={item}
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