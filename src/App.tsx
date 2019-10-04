import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { Store } from 'redux'
import { History } from 'history'
import Routes from "./routes";
import {ApplicationState} from './store';
import store from './store';
import './App.css';
import { ConnectedRouter } from 'connected-react-router'

interface MainProps {
  store: Store<ApplicationState>
  history: History
}


const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <div className="App">
      <header className="App-header">
         <Provider store={store}>
            <ConnectedRouter history={history}>
                   <Routes/>
            </ConnectedRouter>
        </Provider>
      </header>
    </div>
   
  );
}

export default App;
