import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Repo from "./Pages/Repo";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="repo/:name" element={<Repo />} />
    </Routes>
  );
}

export default App;
