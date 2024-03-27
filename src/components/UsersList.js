import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
