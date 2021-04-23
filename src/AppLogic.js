import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./user-data/actions/usersListActions";
import UserProfile from "./main-layout/UserProfile";
import UsersList from "./main-layout/UsersList";
import { createMuiTheme } from "@material-ui/core";
import { green, lightGreen } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: lightGreen[500],
    },
  },
  typography: {
    h1: {
      fontSize: 35,
      margin: 20,
    },
    h3: {
      fontSize: 25,
      margin: 20,
    },
    h5: {
      fontSize: 15,
      fontWeight: "bolder",
    },
  },
});

export default function AppLogic() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users")
      .then((res) => res.json())
      .then((res) => dispatch(loadData(res.data)));
  });

  return (
    <ThemeProvider theme={theme}>
      <UsersList />
      <UserProfile />
    </ThemeProvider>
  );
}
