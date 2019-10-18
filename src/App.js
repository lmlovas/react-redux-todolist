import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { getRandomTagline } from '../src/helpers';

class App extends React.Component {
  render () {
    return (
      <div className = "container">
        <Header tagline = {getRandomTagline()} />
        <ToDoList />
      </div>
    );
  }
}

export default App;