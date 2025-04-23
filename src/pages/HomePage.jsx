import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-zinc-900 via-slate-800 to-green-700 text-white ">
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            📝 Tus Notas, Siempre Contigo
          </h1>
          <p className="text-lg text-zinc-300 mb-6">
            Guarda tus pensamientos, ideas, tareas o lo que quieras en segundos.
            Con título, descripción y fecha automática, no se te escapa nada.
            Simple, seguro y accesible desde cualquier dispositivo.
          </p>
          <p className="text-md text-zinc-400 mb-6 italic">
            "Olvida el papel. Escribe. Guarda. Listo."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">
                Iniciar Sesión
              </button>
            </Link>

            <Link to="/register">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Registrarse
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-700 py-6 text-center text-zinc-500 text-sm">
        <p>Una app sencilla para guardar tus notas cuando lo necesitas.</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-green-700">
            <Link to="/quienes-somos">BasicWeb </Link>
          </span>
          Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
