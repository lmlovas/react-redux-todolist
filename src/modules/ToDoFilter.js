import ToDoFilter from '../components/ToDoFilter'
import PropTypes from 'prop-types';

ToDoFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  };

