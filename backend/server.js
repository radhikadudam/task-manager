// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");
// const taskRoutes = require("./routes/taskRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json()); 
// const dns = require('dns');
// dns.setDefaultResultOrder('ipv4first');
 
// mongoose.connect(process.env.MONGO_URI,)
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log("Mongo Error:", err));

// app.use("/api/auth", authRoutes);
// app.use("/api/tasks", taskRoutes);

// app.get("/", (req, res) => {
//   res.send("API Running");
// });
// console.log(process.env.MONGO_URI)
// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });


require("dotenv").config();

const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("URI being used:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Mongo Error:", err.message));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => res.send("API Running"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});