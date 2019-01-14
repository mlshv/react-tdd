import React from 'react';
import './App.css';
import TODOList from './TODOList'

class App extends React.Component {
  render() {
    return (
      <TODOList todos={[
        {
            text: 'Покормить кота.',
            checked: false,
        },
        {
            text: 'Захватить мир.',
            checked: false,
        }
    ]} />
    )
  }
}

export default App;
