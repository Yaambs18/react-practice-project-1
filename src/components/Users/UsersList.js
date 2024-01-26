import React from "react";

import User from "./User";
import './User.css';

const UsersList = props => {
    return (
        <ul>
            {props.users.map(user => {
                return <User key={user.id} user={user} />
            })}
        </ul>
    )
}

export default UsersList;