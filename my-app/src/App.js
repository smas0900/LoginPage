import { Link, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/signup";
import NewPostForm from "./components/NewPostForm";
import Posts from "./components/Posts";
// import Comments from "./components/Comments";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/NewPostForm" element={<NewPostForm />} />
        {/* <Route path="/Comments" element={<Comments />} /> */}
      </Routes>
    </>
  );
}

export default App;
