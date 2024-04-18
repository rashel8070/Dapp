import express from "express";
import { validateCarName } from "../middleware/validators.js";
import { getCarData } from "../controllers/carController.js";

// We will create a router object
const router = express.Router();

// We will create a route for the car data based on the manufacturer name
router.get("/:manufacturer", validateCarName, getCarData)

// We will export the router
export default router;
