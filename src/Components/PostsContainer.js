import NewPost from "./PostCard";
import NewPostForm from "./PostForm";
import { connect } from "react-redux";

const PostsContainer = (props) => {
  return (
    <div>
      <NewPostForm />
      <h4>POSTS:</h4>
      {props.posts.map((post) => {
        return <NewPost post={post} key={post.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostsContainer);
