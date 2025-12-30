import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SubmitArtefact from "./pages/submitartefact";
import ReviewArtefact from "./pages/reviewartifact";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Recommendations from "./pages/recommendations";
import ArtefactView from "./pages/artefactview";
import Repository from "./pages/repository";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit" element={<SubmitArtefact />} />
        <Route path="/review" element={<ReviewArtefact />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/artifact" element={<ArtefactView />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
