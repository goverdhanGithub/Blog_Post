import "./App.css";
import PostsContainer from "./Components/PostsContainer";
function App() {
  return (
    <>
      <div>
        <h1>Blog-Post</h1>
        <PostsContainer />
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// const [count, setCount] = useState(0);
/* <div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
</div> */
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
