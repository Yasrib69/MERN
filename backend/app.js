import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// ✅ MIDDLEWARE ORDER MATTERS
app.use(cors({
  origin: "http://localhost:5174", // update to match your frontend
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// ✅ ROUTES
app.use("/api/v1/reservation", reservationRouter);

export default app;
