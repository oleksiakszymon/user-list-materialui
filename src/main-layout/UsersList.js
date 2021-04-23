import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../user-data/actions/selectedUserActions";
import PersonIcon from "@material-ui/icons/Person";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  active: {
    backgroundColor: "#E1E1E1",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  inactive: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  userList: {
    float: "left",
    textAlign: "center",
    height: "100vh",
    marginRight: 50,
    position: "fixed",
    width: 400,
  },
});

export default function UsersList() {
  const usersData = useSelector((state) => state.usersListReducer);
  const selectedUser = useSelector((state) => state.selectedUserReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Box className={classes.userList}>
      <List>
        {usersData.map((user) => (
          <ListItem
            key={user.id}
            className={
              selectedUser
                ? user.id === selectedUser.id
                  ? classes.active
                  : classes.inactive
                : ""
            }
            button
            onClick={() => dispatch(selectUser(user))}
          >
            <ListItemAvatar>
              <PersonIcon color="secondary" />
            </ListItemAvatar>
            <ListItemText primary={user.name}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
