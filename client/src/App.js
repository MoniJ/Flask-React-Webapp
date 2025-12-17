import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://flask-backend-1a0n.onrender.com/api")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("⚠️ Failed to fetch backend"));
  }, []);

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
      </div>
    </div>
  );
}

export default App;