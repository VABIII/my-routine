import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom";
import AddPush from "./AddPush";
import axios from "axios";

const MyRoutine = props => {
    const {user} = props;
    console.log(user)

    useEffect(() => {


    }, [])

    return (
        <div className='routine-container'>
            <div>
                <h1>Hi {user.fullName}!</h1>
            </div>
            <nav>
                <Link id="add-push" to='/routine/add' >Add a new push routine</Link>
                <Route path="/routine/add" component={AddPush}/>
            </nav>
        </div>
    );
};

export default MyRoutine;
















































