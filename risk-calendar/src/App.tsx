import React from 'react';
import './App.css';
import Calendar from './components/calendar';
import { Provider } from 'react-redux';
import store from './store/index';

import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <main>
          <Provider store={store} ><Calendar /></Provider>
        </main>
      </div>
    );
  }
}

export default App;