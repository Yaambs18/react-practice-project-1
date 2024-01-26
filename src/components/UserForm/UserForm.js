import React, { useState } from 'react';

import './UserForm.css';

const UserForm = props => {
    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState('');

    const [error, setError] = useState();

    // const [isNameValid, setIsNameValid] = useState(true);
    // const [isAgeValid, setIsAgeValid] = useState(true);

    const nameChangeHandler = (event) => {
        const name = event.target.value;
        setName(name);
    }
    
    const ageChangeHandler = event => {
        const age = event.target.value;
        setAge(age);
    }

    const submitFormHandler = event => {
        event.preventDefault();
        if(enteredName.trim().length < 1 && enteredAge.trim().length < 1) {
            // alert('Please Enter name and age !!');
            setError({
                title: 'Invalid Input',
                message: 'Please Enter name and age !!'
            });
            props.onError(error);
            return;
        } else if (enteredName.trim().length < 3) {
            // alert('Please Enter valid Name');
            setError({
                title: 'Invalid Input',
                message: 'Please Enter valid Name !!'
            });
            setName('');
            props.onError(error);
            return;
        } else if (+enteredAge < 1) {
            // alert('Age should be greater than 0');
            setError({
                title: 'Invalid Input',
                message: 'Age should be greater than 0 !!'
            });
            setAge('');
            props.onError(error);
            return;
        }
        const user = {
            name: enteredName,
            age: +enteredAge
        }
        props.onSaveUser(user);
        setName('');
        setAge('');
    }

    return (
        <form>
            <div className="user-form">
                <div className="form-item">
                    <label>Name: </label>
                    <input placeholder="Name" id="name" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className="form-item">
                    <label>Age (years): </label>
                    <input placeholder="Age" type="number" min="1" step="1" id="age" value={enteredAge} onChange={ageChangeHandler}/>
                </div>
                <div className="add-user">
                    <button id="submitBtn" type="submit" onClick={submitFormHandler}>Add User</button>
                </div>
            </div>
        </form>
    )
}

export default UserForm;