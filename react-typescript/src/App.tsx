import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomNumber from './Components/RandomNumber';

interface Props {
  name: string;
  children(one: string, two: string): JSX.Element; 
}

const App: React.FC<Props> = props => {
  return <div>Hi {props.name}
    <div className="children">
      {props.children('one', 'two')}
    </div>
    <RandomNumber></RandomNumber>
  </div>
}

export default App;
