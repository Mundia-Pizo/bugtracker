import React, { Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import {Provider}  from 'react-redux';
import store from './store';
import Bugs from './components/Bugs';
import AddBugs from './components/AddBugs';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="App mb-30">
          <Header/>
          <Bugs/>
          <div className="col-sm-6 mt-15"> 
             <AddBugs/>
          </div>
          <Login/>
          <Register/>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
