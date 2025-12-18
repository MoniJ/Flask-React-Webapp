import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [addStatus, setAddStatus] = useState("");
  const [section, setSection] = useState("Seccion A");

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