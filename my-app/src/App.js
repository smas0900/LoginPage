import { Link, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/signup";
import Mainpage from "./components/Mainpage";

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
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
