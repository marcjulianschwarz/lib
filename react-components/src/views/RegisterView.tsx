import { useState } from "react";
import { Link, useNavigate } from "react-router";

interface RegisterViewProps {
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error: string }>;
  minUsernameLength?: number;
  isLoading?: boolean;
  title?: string;
  navigateTo?: string;
}

export default function RegisterView({
  register,
  minUsernameLength = 3,
  isLoading = false,
  title = "Create an Account",
  navigateTo = "/login",
}: RegisterViewProps) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username.length < minUsernameLength) {
      setError(
        `Username must be at least ${minUsernameLength} characters long`,
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const result = await register(username, email, password);

    if (result.success) {
      navigate(navigateTo);
    } else {
      setError(result.error || "Registration failed");
    }
  };

  return (
    <div className="w-11/12 md:w-5/12 lg:w-4/12 m-auto mt-20 flex flex-col items-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          {title}
        </h1>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  // Check validations when all fields are filled
                  if (email && password && confirmPassword) {
                    if (
                      e.target.value.length > 0 &&
                      e.target.value.length < 3
                    ) {
                      setError("Username must be at least 3 characters long");
                    } else if (password !== confirmPassword) {
                      setError("Passwords do not match");
                    } else {
                      setError("");
                    }
                  }
                }}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 text-base border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: "16px" }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // Check validations when all fields are filled
                  if (
                    username &&
                    password &&
                    confirmPassword &&
                    e.target.value
                  ) {
                    if (username.length < minUsernameLength) {
                      setError(
                        `Username must be at least ${minUsernameLength} characters long`,
                      );
                    } else if (password !== confirmPassword) {
                      setError("Passwords do not match");
                    } else {
                      setError("");
                    }
                  }
                }}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 text-base border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: "16px" }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  // Check validations when all fields are filled
                  if (username && email && confirmPassword && e.target.value) {
                    if (username.length < minUsernameLength) {
                      setError(
                        `Username must be at least ${minUsernameLength} characters long`,
                      );
                    } else if (e.target.value !== confirmPassword) {
                      setError("Passwords do not match");
                    } else {
                      setError("");
                    }
                  }
                }}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 text-base border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: "16px" }}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  // Check validations when all fields are filled
                  if (username && email && password && e.target.value) {
                    if (username.length < minUsernameLength) {
                      setError(
                        `Username must be at least ${minUsernameLength} characters long`,
                      );
                    } else if (password !== e.target.value) {
                      setError("Passwords do not match");
                    } else {
                      setError("");
                    }
                  }
                }}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 text-base border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: "16px" }}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Register"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
