import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import MiLogo from '../img/LogoBaseWeb.svg';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (navData) =>
    `relative after:content-[''] after:block after:w-full after:h-[1px] after:transition-all ${
      navData.isActive
        ? 'after:bg-blue-700 after:shadow-[0_0_6px_2px_#0000FF]'
        : 'after:bg-transparent hover:after:bg-white hover:after:shadow-[0_0_6px_2px_#1E90FF]'
    }`;

  return (
    <nav className="bg-zinc-800  text-white px-3 py-4 flex items-center justify-between shadow-md relative">
      {/* Logo + título */}
      <NavLink
        to={isAuthenticated ? '/tasks' : '/'}
        className="flex items-center gap-3"
      >
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
        <img
          src={MiLogo}
          alt="Logo Basicweb"
          className="h-6 w-auto object-contain"
        />
      </NavLink>

      {/* Botón menú hamburguesa */}
      <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú escritorio */}
      <ul className="hidden sm:flex gap-6 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-sm">
              Bienvenido,{' '}
              <span className="font-semibold text-blue-500">
                {user.username}
              </span>
            </li>
            <li>
              <NavLink
                to="/add-task"
                className={({ isActive }) =>
                  `hover:underline underline-offset-4 transition ${
                    isActive ? 'text-white' : 'text-indigo-300 hover:text-white'
                  }`
                }
              >
                Añadir Nota
              </NavLink>
            </li>
            <li>
              <button
                onClick={logout}
                className="hover:underline underline-offset-4 text-red-300 hover:text-white transition"
              >
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/" className={linkClass}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/quienes-somos" className={linkClass}>
                Quienes somos
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={linkClass}>
                Iniciar Sesión
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="sm:hidden absolute top-16 left-0 w-full bg-zinc-800 flex flex-col items-center gap-4 py-4 z-50 shadow-md">
          {isAuthenticated ? (
            <>
              <li className="text-sm">
                Bienvenido,{' '}
                <span className="font-semibold">{user.username}</span>
              </li>
              <li>
                <NavLink
                  to="/add-task"
                  onClick={toggleMenu}
                  className="text-indigo-300 hover:text-white hover:underline"
                >
                  Añadir Nota
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="text-red-300 hover:text-white hover:underline"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive ? 'text-white underline' : 'hover:underline'
                  }
                >
                  Iniciar Sesión
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive ? 'text-white underline' : 'hover:underline'
                  }
                >
                  Registrarse
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/quienes-somos"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive ? 'text-white underline' : 'hover:underline'
                  }
                >
                  Quienes somos
                </NavLink>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
