import { useEffect, useState } from "react";
import api from "../services/api";

function StaffList() {
  const [staff, setStaff] = useState([]);

  const fetchStaff = async () => {
    const res = await api.get("/staff");
    setStaff(res.data);
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div>
      <h2>Staff Members</h2>

      {staff.map((s) => (
        <div key={s._id}>
          <p>{s.name}</p>
          <p>{s.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StaffList;
