import React from "react";
import Paper from "@material-ui/core/Paper";

export default function PostBody(props) {
  return (
    <Paper
      variant="outlined"
      style={{ fontSize: "20px", width: "75%", float: "left", height: "400px" }}
    >
      <p style={{ padding: "30px" }}>{props.children}</p>
    </Paper>
  );
}
