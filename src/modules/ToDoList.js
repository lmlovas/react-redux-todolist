import ToDoList from '../components/ToDoList';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    items: PropTypes.objectOf(
      PropTypes.shape({
        done: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string.isRequired,
  };