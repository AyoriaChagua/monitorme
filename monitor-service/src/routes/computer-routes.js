import { Router } from "express";
import * as ComputersController from "../controllers/computer-controller.js";

const router = Router();

router.get("/:name", ComputersController.getComputerInfo);

export default router;