import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Experties from "./pages/Experties";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black p-6 text-white flex">
      
      {/* Sidebar fixed on the left */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-72"> {/* ml-72 = sidebar width */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/expertise" element={<Experties />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

