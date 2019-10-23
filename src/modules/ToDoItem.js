import ToDoItem from '../components/ToDoItem';
import PropTypes from 'prop-types';

ToDoItem.propTypes = {
    todo: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
    toggleToDo: PropTypes.func.isRequired,
    updateToDoText: PropTypes.func.isRequired,
    removeToDo: PropTypes.func.isRequired,
  };