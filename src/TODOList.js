import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos &&
          this.props.todos.map(({ text, checked }, i) => (
            <div key={i} className="todo-item">
              <span className="todo-item__text">{text}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
