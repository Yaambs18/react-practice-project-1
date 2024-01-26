import React from "react";

import UsersList from "./UsersList";

const Users = props => {
    return (
            <UsersList users={props.users} />
    );
}

export default Users;