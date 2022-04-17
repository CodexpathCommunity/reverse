import React from "react";

function UserCard({ displayName, photoUrl, uid }) {
  const enterConversations = async () => {};

  return (
    <div className="user-list-card" onClick={enterConversations}>
      <img src={photoUrl} alt="profile-pc" className="user-list-img" />
      <h3 className="user-list-name">{displayName}</h3>
    </div>
  );
}

export default UserCard;
