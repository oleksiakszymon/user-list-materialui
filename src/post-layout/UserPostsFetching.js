import React, { Fragment } from "react";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { loadPosts } from "../user-data/actions/postsActions";

const useStyles = makeStyles({
  postContainer: {
    margin: 30,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 0,
    height: 552,
    width: "90%",
  },
});

export default function UserPostsFetching() {
  const posts = useSelector((state) => state.postsReducer);
  const selectedUser = useSelector((state) => state.selectedUserReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://gorest.co.in/public-api/users/` + selectedUser.id + `/posts`)
      .then((res) => res.json())
      .then((res) => dispatch(loadPosts(res.data)));
  }, [selectedUser]);

  return (
    <Fragment>
      {posts.length === 0 ? (
        <Typography variant="h1">No posts</Typography>
      ) : (
        <Fragment>
          {posts.map((post) => (
            <Container key={post.id} className={classes.postContainer}>
              <PostTitle>{post.title}</PostTitle>
              <Box>
                <PostBody>{post.body}</PostBody>
                <Comments postId={post.id} />
              </Box>
            </Container>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}
