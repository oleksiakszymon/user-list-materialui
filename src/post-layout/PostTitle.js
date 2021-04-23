import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  postTitleBox: {
    fontSize: "20px",
    margin: 0,
    padding: 10,
    height: 130,
  },
  postTitle: {
    margin: "auto",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));
export default function PostTitle(props) {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.main" className={classes.postTitleBox}>
      <Typography variant="h1" className={classes.postTitle}>
        {props.children}
      </Typography>
    </Box>
  );
}
