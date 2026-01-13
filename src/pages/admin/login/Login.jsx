import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Invalid email or password");
      return;
    }

    setError("");
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="w-[380px] bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Admin Access
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Secure control panel login
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-md bg-red-50 text-red-600 text-sm px-4 py-2 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:border-transparent"
          />

          {/* Primary CTA */}
           
          <button
  className="w-full bg-[#007bff] hover:bg-[#0069d9] text-white
             text-sm font-medium px-6 py-2.5 rounded-md transition
             cursor-pointer"
>
  Sign in
</button>

        </form>

        {/* Secondary Action */}
        <button
  className="w-full mt-4 border border-gray-300 text-gray-700
             text-sm font-medium px-6 py-2.5 rounded-md
             hover:bg-gray-50 transition cursor-pointer"
>
  Back to Home
</button>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Authorized administrators only
        </p>
      </div>
    </div>
  );
};

export default Login;
