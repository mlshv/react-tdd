import React from 'react';
import './App.css';
import TODOList from './TODOList';
import TODOInput from './TODOInput';

class App extends React.Component {
  state = {
    todos: []
  };

  constructor(props) {
    super();
    const savedAppState = props.storage.getItem('saved-app-state');

    if (savedAppState) {
      this.state = JSON.parse(savedAppState);
    }
  }

  componentDidUpdate() {
    this.props.storage.setItem('saved-app-state', JSON.stringify(this.state));
  }

  handleSubmit = text => {
    this.setState(prevState => ({
      todos: [{ text, checked: false }, ...prevState.todos]
    }));
  };

  handleRemove = id => {
    this.setState(prevState => ({
      todos: [...prevState.todos.slice(0, id), ...prevState.todos.slice(id + 1)]
    }));
  };

  handleCheck = (id, value) => {
    this.setState(prevState => {
      const { text } = prevState.todos[id];

      return {
        todos: [
          ...prevState.todos.slice(0, id),
          { text, checked: value },
          ...prevState.todos.slice(id + 1)
        ]
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <TODOInput onSubmit={this.handleSubmit} />
        <TODOList
          todos={this.state.todos}
          onRemove={this.handleRemove}
          onCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default App;
