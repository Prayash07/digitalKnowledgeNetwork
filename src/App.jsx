import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SubmitArtefact from "./pages/submitartefact";
import ReviewDashboard from "./pages/reviewdashboard";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Recommendations from "./pages/recommendations";
import ArtefactView from "./pages/artefactview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit" element={<SubmitArtefact />} />
        <Route path="/review" element={<ReviewDashboard />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/artifact" element={<ArtefactView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
