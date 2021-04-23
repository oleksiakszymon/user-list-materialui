import React, { Fragment } from "react";
import UserPostsFetching from "../post-layout/UserPostsFetching";
import { useSelector } from "react-redux";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  userProfileBox: {
    width: "calc(100% - 450px)",
    float: "right",
    textAlign: "center",
    height: "100vh",
  },
});

export default function UserInfo() {
  const selectedUser = useSelector((state) => state.selectedUserReducer);
  const classes = useStyles();
  return (
    <Box className={classes.userProfileBox}>
      {selectedUser ? (
        <Fragment>
          <Typography variant="h1">{selectedUser.name}</Typography>
          <UserPostsFetching />
        </Fragment>
      ) : (
        ""
      )}
    </Box>
  );
}
