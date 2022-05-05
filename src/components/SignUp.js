import React, { useState } from 'react';

const initialValues = {
    username: "",
    fullName: "",
    email: "",
    password: ""
}


const SignUp = () => {
    const [formVals, setFormVals] = useState(initialValues);



    const onChange = evt => {
        let name = evt.target.name;
        let value = evt.target.value;

        setFormVals({
            ...formVals,
            [name]: value
        })
        console.log(formVals)


    }

    return (
        <div className="signup-container">
            <form id="signup-form">
                <div className="header">
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
















































