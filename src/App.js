import react from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <Header/>
      </div>
        <div className='body-container'>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path='/' component={Home}/>


            </Switch>


        </div>

    </div>
  );
}

export default App;
