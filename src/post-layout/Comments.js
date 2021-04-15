import React, { useEffect } from "react";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";

export default function Comments(props) {
  const { postId } = props;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch(`https://gorest.co.in/public-api/posts/` + postId + `/comments`)
      .then((res) => res.json())
      .then((res) => {
        if (isMounted) {
          setComments(res.data);
        }
      });
    return () => {
      isMounted = false;
    };
  });

  return (
    <div>
      <Paper
        variant="outlined"
        style={{
          fontSize: "20px",
          width: "calc(25% - 5px)",
          float: "left",
          height: "400px",
        }}
      >
        <h3>{comments.length !== 0 ? "Comments:" : "No comments"}</h3>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <h5 style={{ margin: "5px" }}>{comment.name}</h5>
                <p
                  style={{
                    margin: 0,
                    marginBottom: "15px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {comment.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Paper>
    </div>
  );
}
