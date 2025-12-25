import { Router } from "express";
import todoRouters from "./todo.routes.js"


const router = Router();

// /api/todos
router.use("/todos", todoRouters);

export default router;