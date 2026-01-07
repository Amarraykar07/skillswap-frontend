const Dashboard = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to SkillSwap+ 🚀</h1>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="bg-white p-6 rounded shadow hover:scale-105 hover:shadow-lg transition transform">
    <h3 className="font-semibold">Find Matches</h3>
    <p>AI-powered skill matching</p>
    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
      Explore
    </button>
  </div>

  <div className="bg-white p-6 rounded shadow hover:scale-105 hover:shadow-lg transition transform">
    <h3 className="font-semibold">Barter Requests</h3>
    <p>Manage your skill swaps</p>
    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
      View
    </button>
  </div>

  <div className="bg-white p-6 rounded shadow hover:scale-105 hover:shadow-lg transition transform">
    <h3 className="font-semibold">Profile</h3>
    <p>Your trust & ratings</p>
    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
      Open
    </button>
  </div>
</div>

    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "8px",
  width: "220px",
};

const btn = {
  marginTop: "10px",
  padding: "8px 14px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Dashboard;
