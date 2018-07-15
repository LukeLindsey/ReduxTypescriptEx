import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import Count from './Count';
import demo from './reducers'

const store = createStore(demo);

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Count title="My Title"/>
      </div>
      </Provider>
    );
  }
}

export default App;
