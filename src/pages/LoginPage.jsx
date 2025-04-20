import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md shadow-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-600 p-2 text-white mb-2 rounded" key={i}>
            {error}
          </div>
        ))}

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
