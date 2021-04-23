const postReducer = (state = [], action) => {
  switch (action.type) {
    case "loadPosts":
      return action.posts;
    default:
      return state;
  }
};
export default postReducer;
