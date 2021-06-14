import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  name: string;
}

const App: React.FC<Props> = props => {
  return <div>Hi {props.name}</div>
}

export default App;
