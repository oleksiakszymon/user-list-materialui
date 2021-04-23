import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  postBodyBox: {
    fontSize: 20,
    width: "75%",
    float: "left",
    height: 400,
  },
  postBodyParagraph: {
    padding: 30,
  },
}));

export default function PostBody(props) {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.postBodyBox}>
      <Typography variant="body1" className={classes.postBodyParagraph}>
        {props.children}
      </Typography>
    </Paper>
  );
}
