import { useState } from "react";
import { useSignupMutation } from "../redux/features/user/userEndpoint";
import { useAppDispatch } from "../redux/hooks";
import { authenticate } from "../redux/features/user/userSlice";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const [signup] = useSignupMutation();
  const handleSubmit = async (): Promise<void> => {
    setError("");
    const result = await signup({ name, username, password });
    if (result.error) {
      setError(result?.error?.status);
    } else if (result.data) {
      dispatch(authenticate(result.data.data));
      navigate("/");
    }
    console.log("Login button clicked!", result);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
