import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Register } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
