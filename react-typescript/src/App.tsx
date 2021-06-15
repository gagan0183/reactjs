import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomNumber from './Components/RandomNumber';
import Counts from './Components/Counts';

interface Props {
  name: string;
  children(one: string, two: string): JSX.Element; 
}

const App: React.FC<Props> = props => {
  return <div>Hi {props.name}
    <div className="children">
      {props.children('one', 'two')}
    </div>
    <RandomNumber />
    <Counts />
  </div>
}

export default App;
