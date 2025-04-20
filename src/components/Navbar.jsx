import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 flex justify-between py-5 px-10  ">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">Tasks Manganer</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="list-none">welcome {user.username}</li>
            <li className="list-none">
              <Link
                to="/add-task"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                add task
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Cerrrar sesion
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="list-none">
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">
                Login
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;
