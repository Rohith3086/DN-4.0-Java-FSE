import React, { Component } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    alert("Hello! Have a great day!");
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div className="App" style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'left' }}>
        <h2>{this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>
        <br /><br />

        <button onClick={this.decrement}>Decrement</button>
        <br /><br />

        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        <br /><br />

        <button onClick={this.handleClick}>Click on me</button>
        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
