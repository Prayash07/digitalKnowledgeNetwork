import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SubmitArtefact from "./pages/submitartefact";
import ReviewDashboard from "./pages/reviewdashboard";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<SubmitArtefact />} />
        <Route path="/review" element={<ReviewDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
