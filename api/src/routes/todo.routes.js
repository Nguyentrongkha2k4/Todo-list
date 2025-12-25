import express from "express";
import todoController from "../controllers/todo.controller.js"

const router = express.Router();

router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);

export default router;