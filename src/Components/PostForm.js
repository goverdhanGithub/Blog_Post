import { useState } from "react";
import { addPost } from "../Redux/Actions";
import { v4 as uuidv4 } from "uuid"; //alice name/another name
import { connect } from "react-redux";

const NewPostForm = (props) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  /*
preventDefault: If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
for stop unneccessary payloading/realoading
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewPost({ text: text, id: uuidv4 });
    setText("");
  };

  return (
    <div>
      <>
        <h2>Create a New Post</h2>
        <form action="" onSubmit={handleSubmit}>
          <textarea
            cols="20"
            rows="5"
            placeholder="Write Your Post..."
            value={text}
            onChange={handleText}
          ></textarea>
          <br />
          <button type="submit">Post</button>
        </form>
      </>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  console.log("Dispatch", dispatch);
  return {
    addNewPost: (post) => dispatch(addPost(post))
  };
};

//connect function is required two arguments
export default connect(null, mapDispatchToProps)(NewPostForm);
