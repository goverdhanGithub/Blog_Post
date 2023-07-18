// in action function only two params: action-type and payload
const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: {
      text: post.text,
      id: post.id
    }
  };
};

export { addPost };
