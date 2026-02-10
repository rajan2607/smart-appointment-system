import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h2 className="font-bold text-lg tracking-wide">
          Smart Appointment System
        </h2>

        {/* Links */}
        <div className="flex gap-4 items-center">

          {role === "OWNER" && (
            <>
              <Link className="hover:text-indigo-200" to="/dashboard">
                Dashboard
              </Link>
              <Link className="hover:text-indigo-200" to="/add-staff">
                Add Staff
              </Link>
              <Link className="hover:text-indigo-200" to="/staff-list">
                Staff
              </Link>
            </>
          )}

          {role === "STAFF" && (
            <Link className="hover:text-indigo-200" to="/dashboard">
              Dashboard
            </Link>
          )}

          {role === "CUSTOMER" && (
            <Link className="hover:text-indigo-200" to="/book">
              Book Appointment
            </Link>
          )}

          {role && (
            <button
              onClick={logout}
              className="bg-white text-indigo-700 px-4 py-1 rounded-lg hover:bg-gray-200 transition"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
