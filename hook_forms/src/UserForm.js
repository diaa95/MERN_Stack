import React, { useState } from  'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, passwordConfirmation};
        console.log("Welcome", newUser);
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else if (e.target.value.length >= 2)
            setFirstNameError("");
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else if (e.target.value.length >= 2)
            setLastNameError("");
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else if (e.target.value.length >= 3)
            setEmailError("");
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Email must be 8 characters or longer!");
        } else if (e.target.value.length >= 8)
            setPasswordError("");
    }
    const handlePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value);
        if (String(e.target.value) !== String(password)) {
            setPasswordConfirmationError("Password should match !");
        }else if (String(e.target.value) === String(password)){
            setPasswordConfirmationError("");
        }
    }

        return (
            <>
                <form onSubmit={createUser}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" onChange={handleFirstName}/>
                        {
                            firstNameError ?
                                <p style={{color: 'red'}}>{firstNameError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" onChange={handleLastName}/>
                        {
                            lastNameError ?
                                <p style={{color: 'red'}}>{lastNameError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" onChange={handleEmail}/>
                        {
                            emailError ?
                                <p style={{color: 'red'}}>{emailError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" onChange={handlePassword}/>
                        {
                            passwordError ?
                                <p style={{color: 'red'}}>{passwordError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Password Confirmation: </label>
                        <input type="text" onChange={handlePasswordConfirmation}/>
                        {
                            passwordConfirmationError ?
                                <p style={{color: 'red'}}>{passwordConfirmationError}</p> :
                                ''
                        }
                    </div>
                    <input type="submit" value="Create User"/>
                </form>
                <div>
                    <p>First Name: {firstName} </p>
                    <p>Last Name: {lastName}</p>
                    <p>Email Address: {email}</p>
                    <p>Password: {password}</p>
                    <p>Password Confirmation: {passwordConfirmation}</p>
                </div>
            </>
        );
    }
export default UserForm;