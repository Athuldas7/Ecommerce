import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <p>{user.name}</p>
      <p>{user.email}</p>
      {user.avatar && <img src={user.avatar} alt={user.name} />}  {/* Display image only if it exists */}
    </div>
  );
};

export default UserItem;
