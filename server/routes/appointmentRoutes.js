const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAppointments,
  updateStatus,
  deleteAppointment,
} = require("../controllers/appointmentController");

const auth = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

// CUSTOMER & OWNER → CREATE
router.post("/", auth, allowRoles(["CUSTOMER", "OWNER"]), createAppointment);

// OWNER, STAFF, CUSTOMER → VIEW
router.get("/", auth, allowRoles(["OWNER", "STAFF", "CUSTOMER"]), getAppointments);

// OWNER & STAFF → UPDATE STATUS
router.put("/:id", auth, allowRoles(["OWNER", "STAFF"]), updateStatus);

// OWNER ONLY → DELETE
router.delete("/:id", auth, allowRoles(["OWNER"]), deleteAppointment);

module.exports = router;
