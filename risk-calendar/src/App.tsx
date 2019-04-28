import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar';
import { Provider } from 'react-redux';
import store from './store/index';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//         <Provider store= {store} ><Calendar /></Provider>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>


//     </div>
//   );
// }


import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;