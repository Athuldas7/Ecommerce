import React from 'react';
import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <div>
      <div className="heading-container container">
        <h1>Users List</h1>
      </div>
      <div className='container'>
      <div className="users-list">
        {users.map((user) => (
          <div className="users-container" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            {user.avatar && <img src={user.avatar} alt={user.name} />}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default UserList;
