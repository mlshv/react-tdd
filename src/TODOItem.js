import React from 'react';

class TODOItem extends React.Component {
  handleToggleCheck = () => {
    if (this.props.onToggleCheck) {
      this.props.onToggleCheck(!this.props.checked);
    }
  };

  handleRemove = () => {
    if (this.props.onRemove) {
      this.props.onRemove();
    }
  };

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={this.handleToggleCheck}
          />
          <span className="todo-item__text">{this.props.text || ''}</span>
        </label>
        <button
          className="todo-item__remove-button"
          onClick={this.handleRemove}
        >
          Удалить
        </button>
      </div>
    );
  }
}

export default TODOItem;
