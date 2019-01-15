import React from 'react';
import './App.css';
import TODOItem from './TODOItem';

class TODOList extends React.Component {
  handleCheck = (id, value) => {
    if (this.props.onCheck) {
      this.props.onCheck(id, value);
    }
  }

  handleRemove = (id) => {
    if (this.props.onRemove) {
      this.props.onRemove(id);
    }
  }

  render() {
    return (
      <div>
        {this.props.todos ? (
          this.props.todos.map(({ text, checked }, i) => (
            <TODOItem
              key={i}
              text={text}
              checked={checked}
              onCheck={(value) => this.handleCheck(i, value)}
              onRemove={() => this.handleRemove(i)}
            />
          ))) : null}
      </div>
    );
  }
}

export default TODOList;
