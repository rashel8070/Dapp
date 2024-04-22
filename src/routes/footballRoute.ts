import express from "express";
import { validateCoutryName } from "../middleware/validators.js";
import { getfootballdata } from "../controllers/footballcontroller.js";

// We will create a router object
const router = express.Router();

// We will create a route for the car data based on the manufacturer name
router.get("/:country", validateCoutryName, getfootballdata)

// We will export the router
export default router;
