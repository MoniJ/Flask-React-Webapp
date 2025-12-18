import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [addStatus, setAddStatus] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://flask-backend-1a0n.onrender.com/api")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("⚠️ Failed to fetch backend"));
  }, []);

  const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleAddModel = async () => {
    const randomString = generateRandomString();
    setAddStatus("Adding...");

    try {
      await fetch(`https://flask-backend-1a0n.onrender.com/add/${randomString}`);
      setAddStatus(`✓ Added: ${randomString}`);
      setTimeout(() => setAddStatus(""), 3000);
    } catch (error) {
      setAddStatus("✗ Failed to add");
      setTimeout(() => setAddStatus(""), 3000);
    }
  };

  const handleSectionChange = (e) => {
    const section = e.target.value;
    if (section) {
      navigate(`/section/${section}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Floating Pills */}
      <div className="absolute w-[600px] h-[200px] bg-gradient-to-br from-indigo-900 to-indigo-700 opacity-20 blur-3xl rounded-full -top-10 -left-40 rotate-12"></div>
      <div className="absolute w-[400px] h-[140px] bg-gradient-to-br from-pink-800 to-pink-600 opacity-20 blur-2xl rounded-full -bottom-10 -right-20 rotate-45"></div>
      <div className="absolute w-[300px] h-[100px] bg-gradient-to-br from-yellow-600 to-yellow-800 opacity-10 blur-2xl rounded-full top-20 right-1/3 rotate-12"></div>

      {/* Main Content */}
      <div className="z-10 text-center px-6 max-w-2xl">
        <div className="mb-4 inline-flex items-center justify-center bg-white/10 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
          🔌 Connected to Flask Backend: <span className="ml-2 text-green-400">{message}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-loose">
          <span className="block text-white pb-3">Deploy Your</span>
          <span
            style={{ fontFamily: 'Pacifico, cursive' }}
            className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text text-5xl sm:text-6xl md:text-7xl pb-8"
          >
            Flask + React App
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          Build powerful full-stack apps with Flask and React. Deploy effortlessly on Vercel with zero server stress.
        </p>
        
        {/* Section Dropdown */}
        <div className="mt-8">
          <select
            value={selectedSection}
            onChange={handleSectionChange}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-white/20 transition cursor-pointer"
          >
            <option value="" className="bg-gray-900">Select a Section</option>
            <option value="a" className="bg-gray-900">Section A</option>
            <option value="b" className="bg-gray-900">Section B</option>
            <option value="c" className="bg-gray-900">Section C</option>
            <option value="d" className="bg-gray-900">Section D</option>
            <option value="e" className="bg-gray-900">Section E</option>
            <option value="f" className="bg-gray-900">Section F</option>
            <option value="g" className="bg-gray-900">Section G</option>
            <option value="h" className="bg-gray-900">Section H</option>
            <option value="i" className="bg-gray-900">Section I</option>
            <option value="j" className="bg-gray-900">Section J</option>
          </select>
        </div>
        
        {/* Add Model Button */}
        <div className="mt-8">
          <div className="mb-4 inline-block text-left">
            <label className="block text-sm text-gray-300 mb-1">Sección</label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="bg-white/5 text-white px-3 py-2 rounded-md border border-white/10"
            >
              <option>Seccion A</option>
              <option>Seccion B</option>
            </select>
          </div>
          <button
            onClick={handleAddModel}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            Add Random Model
          </button>
          {addStatus && (
            <p className="mt-3 text-sm text-gray-300">{addStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;