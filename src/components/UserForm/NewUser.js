import React, { useState } from "react";

import UserForm from "./UserForm";
import './NewUser.css';
import ErrorModal from "../UI/ErrorModal";

const NewUser = props => {
    const saveUserHandler = enteredUser => {
        const user = {
            ...enteredUser,
            id: Math.random().toString()
        };
        props.onAddUser(user);
    }

    const [error, setError] = useState();
    const onError = error => {
        setError(error);
    }

    const errorModalClickHandler = () => {
        setError();
    }

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorModalClickHandler}/>}
            <div className='new-user'>
                <UserForm onSaveUser={saveUserHandler} onError={onError} />
            </div>
        </React.Fragment>
    );
}

export default NewUser;