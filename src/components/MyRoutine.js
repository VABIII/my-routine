import React, { useEffect, useState } from 'react';
import axios from "axios";

const MyRoutine = props => {
    const {user} = props;

    useEffect(() => {


    }, [])

    return (
        <div className='routine-container'>
            <div>
                <h1>Hi {user.fullName}!</h1>
            </div>
        </div>
    );
};

export default MyRoutine;
















































