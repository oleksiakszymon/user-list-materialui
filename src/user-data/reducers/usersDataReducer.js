const usersDataReducer = (state = [], action) => {
  switch (action.type) {
    case "loadData":
      return action.payload;
    default:
      return state;
  }
};
export default usersDataReducer;
