import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function BookAppointment() {
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    service: "",
    date: "",
    time: "",
  });

  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Load customer's appointments
  const loadAppointments = async () => {
    try {
      const res = await api.get("/appointments");
      setAppointments(res.data);
    } catch {
      toast.error("Failed to load appointments");
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/appointments", form);
      toast.success("Appointment booked successfully!");
      loadAppointments();

      // clear form
      setForm({
        customerName: "",
        customerEmail: "",
        service: "",
        date: "",
        time: "",
      });
    } catch {
      toast.error("Booking failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* BOOK FORM */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="customerName"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            value={form.customerName}
            onChange={handleChange}
          />

          <input
            name="customerEmail"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={form.customerEmail}
            onChange={handleChange}
          />

          <input
            name="service"
            placeholder="Service Required"
            className="w-full border p-2 rounded"
            value={form.service}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded"
            value={form.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            className="w-full border p-2 rounded"
            value={form.time}
            onChange={handleChange}
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Book Appointment
          </button>
        </form>
      </div>

      {/* MY APPOINTMENTS */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">
          My Appointments
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {appointments.map((a) => (
            <div
              key={a._id}
              className="bg-white p-4 rounded shadow"
            >
              <p><b>{a.service}</b></p>
              <p>{a.date} {a.time}</p>
              <p>
                Status:
                <span className="ml-2 font-semibold text-indigo-600">
                  {a.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default BookAppointment;
