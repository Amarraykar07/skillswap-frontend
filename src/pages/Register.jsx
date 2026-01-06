import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" />
      <br />
      <input placeholder="Email" />
      <br />
      <input placeholder="Password" type="password" />
      <br />
      <button onClick={() => navigate("/")}>Register</button>
      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;
