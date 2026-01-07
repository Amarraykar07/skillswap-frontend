import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // 👈 YAHAN ADD

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to SkillSwap+ 🚀</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Find Matches */}
        <div className="bg-white p-6 rounded shadow hover:scale-105 hover:shadow-lg transition transform">
          <h3 className="font-semibold">Find Matches</h3>
          <p>AI-powered skill matching</p>
          <button
            onClick={() => navigate("/matches")}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Explore
          </button>
        </div>

        {/* Barter / Chat */}
        <div className="bg-white p-6 rounded shadow hover:scale-105 hover:shadow-lg transition transform">
          <h3 className="font-semibold">Barter Requests</h3>
          <p>Manage your skill swaps</p>
          <button
            onClick={() => navigate("/chat")}   // 👈 CHAT LINK
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Open Chat
          </button>
        </div>

        {/* Profile */}
        <div className="bg-white p-6 rounded shadow hover:scale-105 hover:shadow-lg transition transform">
          <h3 className="font-semibold">Profile</h3>
          <p>Your trust & ratings</p>
          <button
            onClick={() => navigate("/profile")}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Open
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
