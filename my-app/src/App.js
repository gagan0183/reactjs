import React, { Component } from 'react';
import './App.css';

class Button extends Component {

  handleClick = () => {
    this.props.incrementClics(this.props.increment) ;
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.increment}
      </button> 
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounts = (counts) => {
    this.setState({
      counter: this.state.counter + counts
    });
  };

  render() {
    return (
      <div>
        <Button increment = {1} incrementClics = {this.incrementCounts} />
        <Button increment = {3} incrementClics = {this.incrementCounts} />
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
