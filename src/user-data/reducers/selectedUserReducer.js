const selectedUserReducer = (state = null, action) => {
  switch (action.type) {
    case "selectUser":
      return action.user;
    default:
      return state;
  }
};
export default selectedUserReducer;
