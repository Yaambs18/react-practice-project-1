import React from "react";

import './User.css';
import Card from "../UI/Card";

const User = props => {
    return (
        <Card className='user-item'>
            <div>{props.user.name} ({props.user.age} years old )</div>
        </Card>
    )
}

export default User;