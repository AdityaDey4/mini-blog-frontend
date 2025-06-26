import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600">Mini Blog</h1>
        <div className="flex gap-4">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-indigo-600" : "text-gray-700"
            } hover:text-indigo-600 font-medium`}
          >
            Home
          </Link>
          <Link
            to="/admin"
            className={`${
              location.pathname === "/admin" ? "text-indigo-600" : "text-gray-700"
            } hover:text-indigo-600 font-medium`}
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
} 