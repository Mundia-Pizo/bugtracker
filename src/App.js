import React, { Fragment } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Login from './components/layout/Login';
import Register from './components/layout/Register';
import {Provider}  from 'react-redux';
import store from './store';
import Bugs from './components/Bugs';
import AddBugs from './components/AddBugs';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Fragment>
        <div className="App mb-30">
          <Header/>
          <div className="container">
             <Switch>
               <Route exact path="/" component={Bugs}/>
               <Route exact path="/login" component={Login}/>
               <Route exact path="/register" component={Register}/>
               <Route exact path="/addbug" component={AddBugs}/> 
             </Switch>
          </div>
        </div>
      </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
