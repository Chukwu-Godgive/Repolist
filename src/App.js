import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="home" element={<Home />} />
      {/* "*" path targets all the non existing pages  */}
      <Route exact path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
