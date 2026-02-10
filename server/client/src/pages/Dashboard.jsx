import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const role = localStorage.getItem("role");

  const loadAppointments = async () => {
    try {
      const res = await api.get("/appointments");
      setAppointments(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load appointments");
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        {role === "CUSTOMER" ? "My Appointments" : "Dashboard"}
      </h2>

      {appointments.length === 0 && (
        <p className="text-gray-600">No appointments found.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">

        {appointments.map((a) => (
          <div
            key={a._id}
            className="bg-white p-5 rounded-xl shadow border"
          >
            <p className="font-semibold text-lg">{a.customerName}</p>
            <p className="text-gray-600">{a.customerEmail}</p>

            <p className="mt-2">
              <b>Service:</b> {a.service}
            </p>

            <p>
              <b>Date:</b> {a.date}
            </p>

            <p>
              <b>Time:</b> {a.time}
            </p>

            {/* ===================== */}
            {/* CUSTOMER VIEW */}
            {/* ===================== */}
            {role === "CUSTOMER" && (
              <p className="mt-3 font-semibold">
                Status:{" "}
                <span className="text-indigo-600">
                  {a.status}
                </span>
              </p>
            )}

            {/* ===================== */}
            {/* OWNER / STAFF VIEW */}
            {/* ===================== */}
            {(role === "OWNER" || role === "STAFF") && (
              <select
                value={a.status}
                onChange={async (e) => {
                  await api.put(`/appointments/${a._id}`, {
                    status: e.target.value,
                  });
                  loadAppointments();
                }}
                className="w-full border p-2 mt-3 rounded"
              >
                <option value="PENDING">PENDING</option>
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            )}

            {/* ===================== */}
            {/* OWNER DELETE */}
            {/* ===================== */}
            {role === "OWNER" && (
              <button
                onClick={async () => {
                  await api.delete(`/appointments/${a._id}`);
                  loadAppointments();
                }}
                className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
              >
                Delete
              </button>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default Dashboard;
