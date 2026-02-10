Smart Appointment & Queue Management System

A full-stack MERN application for managing appointments and service queues with role-based access for customers, staff, and owners.

🔗 Live Application

Frontend (Vercel):
https://YOUR_FRONTEND_URL.vercel.app

Backend (Render):
https://YOUR_BACKEND_URL.onrender.com

📌 Overview

Smart Appointment & Queue Management System allows users to book appointments, track service status, and manage staff operations through a secure role-based system.

The platform supports three user roles:

Customer

Staff

Owner

Each role has different permissions and dashboards.

✨ Key Features
Authentication & Security

JWT-based authentication

Encrypted passwords using bcrypt

Role-based authorization

Customer Capabilities

Register and login

Book appointments

View their own appointments

Track appointment status

Staff Capabilities

Login

View all appointments

Update appointment status

Owner Capabilities

Login

View all appointments

Update appointment status

Delete appointments

Add staff members

View staff list

🧱 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

React Router

Backend

Node.js

Express.js

MongoDB (Mongoose)

JSON Web Token (JWT)

bcryptjs

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

📂 Folder Structure
smart-appointment-system/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── client/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── services/
    │   └── App.jsx

⚙️ Environment Setup

Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mysecret
PORT=3001

▶️ Running Locally
Backend
cd server
npm install
npm run dev

Frontend
cd client
npm install
npm run dev


Open in browser:

http://localhost:5173

🔁 API Endpoints
Auth

POST /api/auth/register

POST /api/auth/login

Appointments

POST /api/appointments

GET /api/appointments

PUT /api/appointments/:id

DELETE /api/appointments/:id

Staff

POST /api/staff

GET /api/staff

🎓 What I Learned

Implementing JWT authentication

Role-based authorization

Building REST APIs

Frontend-backend integration

Full-stack deployment

👤 Author

Rajan Pandey
BTech CSE (2024)

GitHub: https://github.com/rajan2607

