# TaskTable 📋

A full-stack **Task Management Application** built with the **MERN Stack**. Supports secure authentication and full task CRUD with a clean, responsive dark UI.

🌐 **Live Demo:** [task-manager-tuhu.vercel.app](https://task-manager-tuhu.vercel.app)
🔧 **Backend API:** [task-manager-injh.onrender.com](https://task-manager-injh.onrender.com)
📁 **GitHub:** [github.com/radhikadudam/task-manager](https://github.com/radhikadudam/task-manager)

---

## ✨ Features

### 🔐 Authentication
- User registration with **bcryptjs** encrypted passwords
- Secure login with **JWT tokens**
- Protected routes for authenticated users only
- Persistent sessions via local storage

### ✅ Task Management
- Create tasks with title and description
- Edit and update existing tasks
- Delete tasks
- Toggle tasks between **Pending** and **Completed**
- Each user sees only their own tasks

### 🎨 UI & Design
- Dark themed UI with violet accents
- Fully responsive — works on mobile and desktop
- Animated task cards with hover interactions
- Live stats: Total / Pending / Completed task counts

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS, Axios, React Router DOM |
| Backend | Node.js, Express.js, JWT, bcryptjs, CORS |
| Database | MongoDB Atlas, Mongoose |
| Deployment | Vercel (frontend), Render (backend) |
| Dev Tools | Git, GitHub, Nodemon, Postman |

---

## 📂 Project Structure

```
task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/radhikadudam/task-manager.git
cd task-manager
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

Runs on: `http://localhost:5000`

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Runs on: `http://localhost:3000`

> Make sure the `baseURL` in `src/services/api.js` points to `http://localhost:5000/api` for local development.

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Task Routes *(JWT required)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks for logged-in user |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/:id` | Get a single task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| PATCH | `/api/tasks/:id/toggle` | Toggle task status |

---

## 🔒 Authentication Flow

1. User registers → password hashed with **bcryptjs**
2. User logs in → server returns a **JWT token**
3. Token stored in **localStorage**
4. Every API request sends the token in the `Authorization` header
5. Backend middleware validates the token before processing requests

---

## 🚀 Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | [task-manager-tuhu.vercel.app](https://task-manager-tuhu.vercel.app) |
| Backend | Render | [task-manager-injh.onrender.com](https://task-manager-injh.onrender.com) |
| Database | MongoDB Atlas | Cloud hosted |

> ⚠️ The backend is hosted on Render's free tier and may take **30–60 seconds** to wake up on the first request after inactivity.

---

## 🔮 Future Enhancements

- [ ] Task search and filtering
- [ ] Due dates and priority levels
- [ ] Drag-and-drop reordering
- [ ] Email notifications
- [ ] Pagination
- [ ] Dark/Light mode toggle

---

## 👩‍💻 Author

**Radhika Dudam**
- GitHub: [github.com/radhikadudam](https://github.com/radhikadudam)

---

## 📄 License

This project is developed for educational and portfolio purposes.
