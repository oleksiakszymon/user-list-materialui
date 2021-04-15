import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../user-data/actions/selectedUserActions";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";

export default function UsersList() {
  const usersData = useSelector((state) => state.usersDataReducer);
  const dispatch = useDispatch();
  return (
    <div className="user-list">
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>
            <Button
              startIcon={<PersonIcon />}
              style={{
                width: "400px",
                height: "46px",
                margin: "1px",
              }}
              variant="outlined"
              size="large"
              color="secondary"
              onClick={() => dispatch(selectUser(user))}
            >
              {user.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
