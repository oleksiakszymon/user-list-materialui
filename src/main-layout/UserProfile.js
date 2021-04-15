import React from "react";
import UserPostsFetching from "../post-layout/UserPostsFetching";
import { useSelector } from "react-redux";

export default function UserInfo() {
  const selectedUser = useSelector((state) => state.selectedUserReducer);

  return (
    <div className="user-info">
      {selectedUser ? (
        <div>
          <h1>{selectedUser.name}</h1>
          <UserPostsFetching />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
