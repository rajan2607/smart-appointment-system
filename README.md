📅 Smart Appointment & Queue Management System

A full-stack role-based appointment and queue management system that allows customers to book appointments, staff to manage service status, and owners to control staff and system operations.

Built with the MERN stack and deployed using modern cloud platforms.

🚀 Live Demo

Frontend (Vercel):
👉 https://YOUR_FRONTEND_URL.vercel.app

Backend (Render):
👉 https://YOUR_BACKEND_URL.onrender.com

🧩 Features
👤 Authentication & Authorization

JWT-based authentication

Role-based access control (OWNER, STAFF, CUSTOMER)

👥 Customer

Register & login

Book appointment

View their own appointments

Track appointment status in real-time

🧑‍💼 Staff

Login

View all appointments

Update appointment status

👑 Owner

Login

View all appointments

Update appointment status

Delete appointments

Add staff users

View staff list

🛡 Security

Password hashing using bcrypt

JWT token verification

Protected routes

🏗 Tech Stack

Frontend

React (Vite)

Tailwind CSS

Axios

React Router

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT

bcryptjs

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

📁 Project Structure
smart-appointment-system/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
└── client/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
