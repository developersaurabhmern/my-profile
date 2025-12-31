import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Experties from "./pages/Experties";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex p-6">
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 ml-72">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/expertise" element={<Experties />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden p-4">
        <div className="mobile-side">
          <Sidebar mobile />
        </div>
        <div className="mobile-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/expertise" element={<Experties />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
