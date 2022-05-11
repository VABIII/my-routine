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
        axios.post('http://localhost:4000/api/auth/login', creds)
            .then(res => {
                const user = res.data.user;
                const token = res.data.token;
                localStorage.setItem('token', token);
                setUser({
                    user_id: user.user_id,
                    username: user.username
                });
                window.location.href = '/';
            })
            .catch(err => console.error(err))
    }

    const onSubmit = evt => {
        evt.preventDefault();
        login(values);
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
            <form className="login-form" onSubmit={onSubmit}>
                <div className="login-header">
                    <h2>Login</h2>
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

                    <label htmlFor="password">&nbsp;Password:&nbsp;</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <br/>
                    <br/>
                    <button id="login-button">Login</button>
                </div>
                <div>
                    <p>Don't have an account? <a href="/signup">Sign Up Here!</a></p>
                </div>
            </form>

        </div>
    )




};

export default Login;
















































