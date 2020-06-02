import React, { Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import {Provider}  from 'react-redux';
import store from './store';
import Bugs from './components/layout/Bugs';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="App">
          <Header/>
          <Bugs/>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
