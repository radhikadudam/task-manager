const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Task
router.post("/", authMiddleware, async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All Tasks
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.id,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Single Task
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Task
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      req.body,
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Task
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    res.status(200).json({
      message: "Task deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Toggle Status
router.patch("/:id/toggle", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    task.status =
      task.status === "Pending"
        ? "Completed"
        : "Pending";

    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;