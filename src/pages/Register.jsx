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
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 hover:scale-105 transition transform">
  Login
</button>
      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;
