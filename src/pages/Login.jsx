import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" />
      <br />
      <input placeholder="Password" type="password" />
      <br />
      <button onClick={() => navigate("/dashboard")}>Login</button>
      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
