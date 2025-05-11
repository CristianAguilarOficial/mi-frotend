import { Link } from 'react-router-dom';
import BannerSinBackend from '../components/BannerSinBackend';

function HomePage() {
  return (
    <>
      <BannerSinBackend mensaje="El servidor del backend esta suspendido por falta de pago || próximamente lo renovó 😂 update:20-May-2025" />
      <div className="flex flex-col min-h-screen  ">
        <main className="flex-grow flex items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              📝 Tus Notas, Siempre Contigo
            </h1>
            <p className="text-lg text-zinc-300 mb-6">
              Guarda tus pensamientos, ideas, tareas o lo que quieras en
              segundos. Con título, descripción y fecha automática, no se te
              escapa nada. Simple, seguro y accesible desde cualquier
              dispositivo.
            </p>
            <p className="text-md text-zinc-400 mb-6 italic">
              "Olvida el papel. Escribe. Guarda. Listo."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Iniciar sesión
                  </span>
                </button>
              </Link>

              <Link to="/register">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    registrarse
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </main>

        <footer className="bg-zinc-800 border-t border-zinc-700 py-6 text-center text-zinc-500 text-sm">
          <p>Una app sencilla para guardar tus notas cuando lo necesitas.</p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-green-700">
              <Link to="/quienes-somos">BasicWeb </Link>
            </span>
            Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
