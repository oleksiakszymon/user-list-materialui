const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "loadComments":
      if (action.comments === undefined) {
        return [];
      }
      //   return { ...state, post: action.comments };
      return { ...state, [action.postId]: action.comments };
    default:
      return state;
  }
};
export default commentsReducer;
