const Dashboard = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to SkillSwap+ 🚀</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={cardStyle}>
          <h3>Find Skill Matches</h3>
          <p>AI-powered skill matching</p>
          <button style={btn}>Explore</button>
        </div>

        <div style={cardStyle}>
          <h3>Barter Requests</h3>
          <p>Manage your skill swaps</p>
          <button style={btn}>View</button>
        </div>

        <div style={cardStyle}>
          <h3>Profile</h3>
          <p>Your trust & ratings</p>
          <button style={btn}>Open</button>
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
