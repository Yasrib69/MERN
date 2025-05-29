// ✅ Correct version — use express.Router()
import express from "express";
import { sendReservation } from "../controller/sendReservation.js";

const router = express.Router();

router.post("/send", sendReservation);

export default router;
