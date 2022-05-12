import react, { useState, useEffect } from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import MyRoutine from "./components/MyRoutine";
import axios from "axios";

function App() {
    const [user, setUser] = useState({});
    console.log(user)
    useEffect(() => {
        axios.get(`http://localhost:4000/api/user/1`)
            .then(res => setUser(res.data))
            .catch(err => console.error(err))
    }, [])


  return (
    <div className="App">
      <div className='header-container'>
        <Header/>
      </div>
        <div className='body-container'>
            <Switch>
                <Route path="/routine">
                    <MyRoutine setUser={setUser} user={user} />
                </Route>
                <Route path="/login">
                    <Login setUser={setUser} user={user} />
                </Route>
                <Route path='/logout'>
                    <Logout setUser={setUser} />
                </Route>
                <Route path="/signup" component={SignUp}/>
                <Route path='/' component={Home}/>


            </Switch>


        </div>

    </div>
  );
}

export default App;
