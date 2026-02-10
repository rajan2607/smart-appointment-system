import { useState } from "react";
import api from "../services/api";

function AddStaff() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/staff", form);
    alert("Staff added");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-indigo-600 mb-4">
          Add Staff
        </h2>

        <input name="name" placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange} />

        <input name="email" placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange} />

        <input type="password" name="password" placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange} />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Add Staff
        </button>
      </form>
    </div>
  );
}

export default AddStaff;
