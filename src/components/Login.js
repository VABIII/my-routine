import React, { useState } from 'react';
import axios from "axios";


const initialValues = {
    username: '',
    password: '',
}


const Login = (props) => {
    const { setUser } = props;
    const [values, setValues] = useState(initialValues);

    const login = creds => {
        axios.post('/', creds)
            .then(res => {

            })
            .catch(err => console.error(err))
    }

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        setValues({
            ...values,
            [name]: value
        });
    }

    return (
        <div className="login-container">
            <form className="login-form">
                <div className="login-header">
                    <h2>Login</h2>
                    <p>Don't have an account? <a href="/signup">Sign Up Here!</a></p>
                </div>
                <div className="signup-input-container">
                    <label htmlFor="username">Username:&nbsp;</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                    <label htmlFor="password">Password:&nbsp;</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <button id="login-button">Login</button>
                </div>
            </form>

        </div>
    )




};

export default Login;
















































