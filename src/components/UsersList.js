import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {user.avatar && <img src={user.avatar} alt={user.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
