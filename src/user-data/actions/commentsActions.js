export const loadComments = (postId, comments) => ({
  type: "loadComments",
  postId: postId,
  comments: comments,
});
