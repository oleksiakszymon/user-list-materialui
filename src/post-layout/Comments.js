import React, { Fragment, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "../user-data/actions/commentsActions";
import { makeStyles } from "@material-ui/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(() => ({
  paper: {
    fontSize: "20px",
    width: "calc(25% - 5px)",
    float: "left",
    height: "400px",
  },
  commentBody: {
    margin: 0,
    marginBottom: "15px",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  h5: {
    margin: "5px",
  },
}));

export default function Comments(props) {
  const classes = useStyles();
  const { postId } = props;
  const comments = useSelector((state) => state.commentsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    fetch(`https://gorest.co.in/public-api/posts/` + postId + `/comments`)
      .then((res) => res.json())
      .then((res) => {
        if (isMounted) {
          dispatch(loadComments(postId, res.data));
        }
      });
    return () => {
      isMounted = false;
    };
  }, [postId]);

  return (
    <Paper variant="outlined" className={classes.paper}>
      {comments[postId] ? (
        <Fragment>
          <Typography variant="h3">
            {comments[postId].length !== 0 ? "Comments:" : "No comments"}
          </Typography>
          <List>
            {comments[postId].map((comment) => {
              return (
                <ListItem key={comment.id}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={comment.name}
                    secondary={comment.body}
                  />
                </ListItem>
              );
            })}
          </List>
        </Fragment>
      ) : (
        ""
      )}
    </Paper>
  );
}
