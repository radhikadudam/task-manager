# 🚀 Task Management Web Application

A full-stack **Task Management Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application provides secure user authentication and allows users to efficiently manage their daily tasks with complete CRUD functionality.

---

## 📌 Features

### 🔐 Authentication & Security

* User Registration with encrypted passwords using **bcryptjs**
* Secure Login using **JWT (JSON Web Token)**
* Protected routes accessible only to authenticated users
* Persistent user sessions using local storage

### ✅ Task Management

* Create new tasks with title and description
* View all personal tasks
* Update existing tasks
* Delete tasks
* Mark tasks as **Completed** or **Pending**
* Users can only access and manage their own tasks

### 🎨 User Interface

* Responsive design for desktop and mobile devices
* Clean and intuitive dashboard
* Form validation and error handling
* Real-time updates after task operations

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* JavaScript (ES6+)
* CSS / Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs
* CORS
* dotenv

### Database

* MongoDB
* Mongoose ODM

### Development Tools

* Git & GitHub
* Nodemon
* Postman

---

## 📂 Project Structure

```text
task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git

cd task-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Authenticate user   |

### Tasks

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| GET    | `/api/tasks`            | Fetch all tasks    |
| POST   | `/api/tasks`            | Create a new task  |
| GET    | `/api/tasks/:id`        | Fetch single task  |
| PUT    | `/api/tasks/:id`        | Update task        |
| DELETE | `/api/tasks/:id`        | Delete task        |
| PATCH  | `/api/tasks/:id/toggle` | Toggle task status |

> **Note:** Task routes require JWT authentication.

---

## 🔒 Authentication Flow

1. User registers using email and password.
2. Password is securely hashed using **bcryptjs**.
3. Upon successful login, a **JWT token** is generated.
4. The token is stored in local storage.
5. Protected routes validate the token before granting access.

---



## 🚀 Future Enhancements

* Task Search Functionality
* Task Filtering (Completed/Pending)
* Pagination
* Due Dates and Priority Levels
* Email Notifications
* Drag-and-Drop Task Management
* Deployment using Vercel, Render, and MongoDB Atlas

---

## 🎯 Learning Outcomes

This project demonstrates practical experience in:

* Full-Stack Web Development
* RESTful API Design
* Authentication & Authorization
* MongoDB Database Management
* React State Management
* Secure Password Handling
* Frontend and Backend Integration

---

## 👩‍💻 Author

**Radhika Dudam**

* GitHub: https://github.com/radhikadudam

---

## 📄 License

This project is developed for educational and internship assessment purposes.
