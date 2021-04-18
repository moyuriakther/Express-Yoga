import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { createContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Book from './components/Book/Book';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          {/* <Appointment/> */}
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/book/:name">
            <Book/>
          </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>  
  );
}

export default App;
