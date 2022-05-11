import React, { useState, useEffect } from 'react';
import axios from "axios";

const initialValues = {
    username: "",
    fullName: "",
    email: "",
    password: ""
}

const signUpErrors = {
    username: "",
    fullName: "",
    email: "",
    password: ""
}


const SignUp = () => {
    const [formVals, setFormVals] = useState(initialValues);
    const [errors, setErrors] = useState(signUpErrors);

    const postUser = user => {
        axios.post(`http://localhost:4000/api/auth/register`, user)
            .then(res => {
                setFormVals(initialValues);
                window.location.href = '/';
                }
            )
            .catch(err => console.error(err));
    }

    const onSubmit = evt => {
        evt.preventDefault();
        postUser(formVals);
    }

    const onChange = evt => {
        let name = evt.target.name;
        let value = evt.target.value;

        setFormVals({
            ...formVals,
            [name]: value
        });
    }

    return (
        <div className="signup-container">
            <form id="signup-form" onSubmit={onSubmit}>
                <div className="signup-header">
                    <h2>Create an account</h2>
                    <p>Already have an account? <a href="/login">Login here</a></p>
                </div>
                <div className="form-input-container">
                    <label htmlFor="username">Username:&nbsp;</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formVals.username}
                        onChange={onChange}
                    />
                    <label htmlFor="fullName">Full Name:&nbsp;</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formVals.fullName}
                        onChange={onChange}
                    />
                    <label htmlFor="email">Email:&nbsp;</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formVals.email}
                        onChange={onChange}
                    />
                    <label htmlFor="password">Password:&nbsp;</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formVals.password}
                        onChange={onChange}
                    />
                </div>
                <button id="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
















































