import React, { useState } from  'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConfirmation };
        console.log("Welcome", newUser);
    };

    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Password Confirmation: </label>
                    <input type="text" onChange={ (e) => setPasswordConfirmation(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
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
};

export default UserForm;