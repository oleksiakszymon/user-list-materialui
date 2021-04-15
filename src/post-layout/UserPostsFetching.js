import React, { Fragment, useState } from "react";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";

export default function UserPostsFetching() {
  const [posts, setPosts] = useState([]);
  const selectedUser = useSelector((state) => state.selectedUserReducer);
  useEffect(() => {
    if (selectedUser) {
      fetch(
        `https://gorest.co.in/public-api/users/` + selectedUser.id + `/posts`
      )
        .then((res) => res.json())
        .then((res) => setPosts(res.data));
    }
  }, [selectedUser]);
  console.log(posts);

  return (
    <div>
      {posts.length === 0 ? (
        <h1>No posts</h1>
      ) : (
        <Container>
          {posts.map((post) => (
            <Fragment key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <div style={{ height: "500px", margin: "0" }}>
                <PostBody>{post.body}</PostBody>
                <Comments postId={post.id} />
              </div>
            </Fragment>
          ))}
        </Container>
      )}
    </div>
  );
}
