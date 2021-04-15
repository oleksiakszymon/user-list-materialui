import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./user-data/actions/usersDataActions";
import UserProfile from "./main-layout/UserProfile";
import UsersList from "./main-layout/UsersList";

export default function AppLogic() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users")
      .then((res) => res.json())
      .then((res) => dispatch(loadData(res.data)));
  });

  return (
    <div>
      <UsersList />
      <UserProfile />
    </div>
  );
}
