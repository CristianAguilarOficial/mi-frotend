import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Register
        </h1>
        {registerErrors.map((error, i) => (
          <div className="bg-red-600 p-2 text-white mb-2 rounded" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="username"
          />
          {errors.username && (
            <p className="text-red-600">username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="email"
            autoComplete="email"
          />
          {errors.email && <p className="text-red-600">email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-red-600">password is required</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition-colors text-white px-4 py-2 rounded-md my-2"
          >
            Register
          </button>
        </form>
        <p className="text-white text-center mt-4">
          already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
