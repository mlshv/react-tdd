import React from 'react';

class TODOInput extends React.Component {
  state = {
    text: ''
  };

  handleTextChange = e => this.setState({ text: e.target.value });

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleTextChange}
          value={this.state.text}
          className="todo-input__input"
        />
        <button
          onClick={this.handleSubmit}
          className="todo-input__submit"
        >
          Сохранить
        </button>
      </div>
    );
  }
}

export default TODOInput;
