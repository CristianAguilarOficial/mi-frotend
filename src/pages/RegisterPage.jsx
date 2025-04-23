import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Eye, EyeOff } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="relative flex items-center justify-center bg-zinc-900 h-screen overflow-hidden">
      <div className="z-10 bg-zinc-800 border-4 border-green-500 max-w-md w-full p-10 rounded-md shadow-lg">
        <ParticlesBackground />
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Crear Cuenta
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
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">El nombre es obligatorio</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo electrónico"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">El correo es obligatorio</p>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Contraseña"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">La contraseña es obligatoria</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-2 rounded-md my-2 font-semibold"
          >
            Registrarse
          </button>
        </form>

        <p className="text-white text-center mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
