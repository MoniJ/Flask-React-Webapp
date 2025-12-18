import { useParams, useNavigate } from "react-router-dom";

function SectionPage() {
  const { section } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Floating Pills */}
      <div className="absolute w-[600px] h-[200px] bg-gradient-to-br from-indigo-900 to-indigo-700 opacity-20 blur-3xl rounded-full -top-10 -left-40 rotate-12"></div>
      <div className="absolute w-[400px] h-[140px] bg-gradient-to-br from-pink-800 to-pink-600 opacity-20 blur-2xl rounded-full -bottom-10 -right-20 rotate-45"></div>
      <div className="absolute w-[300px] h-[100px] bg-gradient-to-br from-yellow-600 to-yellow-800 opacity-10 blur-2xl rounded-full top-20 right-1/3 rotate-12"></div>

      {/* Main Content */}
      <div className="z-10 text-center px-6 max-w-2xl">
        <h1 className="text-6xl font-extrabold mb-6">
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Section {section?.toUpperCase()}
          </span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          You are viewing section {section?.toUpperCase()}
        </p>
        
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default SectionPage;
