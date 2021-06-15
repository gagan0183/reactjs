import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  name: string;
  children(one: string, two: string): JSX.Element; 
}

const App: React.FC<Props> = props => {
  return <div>Hi {props.name}
    <div className="children">
      {props.children('one', 'two')}
    </div>
  </div>
}

export default App;
