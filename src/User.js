import React from 'react'

function User(props) {
    const { data } = props;
    return (
        <div>
            <h1>Use Component {data.name}</h1>
        </div>
    )
}

export default User
