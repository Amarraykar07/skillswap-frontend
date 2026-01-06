import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <img src={logo} alt="logo" style={styles.logo} />
        <span style={styles.brand}>SkillSwap+</span>
      </div>

      <div style={styles.right}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 24px",
    background: "#2563eb",
    color: "white",
  },
  left: { display: "flex", alignItems: "center", gap: "10px" },
  logo: { height: "35px" },
  brand: { fontSize: "20px", fontWeight: "bold" },
  right: { display: "flex", gap: "20px" },
};

export default Navbar;
