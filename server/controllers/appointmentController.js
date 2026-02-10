const Appointment = require("../models/Appointment");

// CREATE APPOINTMENT
exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET APPOINTMENTS
exports.getAppointments = async (req, res) => {
  try {
    let appointments;

    if (req.user.role === "OWNER" || req.user.role === "STAFF") {
      appointments = await Appointment.find().sort({ createdAt: -1 });
    }

    if (req.user.role === "CUSTOMER") {
      appointments = await Appointment.find({
        createdBy: req.user.id,
      }).sort({ createdAt: -1 });
    }

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE STATUS
exports.updateStatus = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json({
      message: "Status updated",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE APPOINTMENT
exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
