import { Link, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";

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
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
