import React from "react";
import AppBar from "@material-ui/core/AppBar";

export default function PostTitle(props) {
  return (
    <AppBar position="relative" style={{ fontSize: "20px" }}>
      <h1>{props.children}</h1>
    </AppBar>
  );
}
