import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
        Task Management App
      </h1>
      <br />
      <h2 className="text-2xl font-bold text-center mb-6">
        Login
      </h2>

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>

    </div>
  </div>
);

export default Login;
    </>
  );

}  

export default Login;