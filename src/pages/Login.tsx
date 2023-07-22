/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import { useLoginMutation } from "../redux/features/user/userEndpoint";
import { useAppDispatch } from "../redux/hooks";
import { authenticate } from "../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const handleSubmit = async (): Promise<void> => {
    setError("");
    const result = await login({ username, password });
    // console.log("Login button clicked!", result);
    if ("error" in result) {
      setError("Error Occured");
    } else if (result.data) {
      dispatch(authenticate(result?.data?.data));
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 my-2 text-xs italic">{error}</p>}
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
