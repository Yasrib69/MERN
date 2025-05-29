import { Reservation } from "../models/reservationSchema.js";



export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  console.log("🔥 Incoming POST request:", req.body);

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    console.log("❌ Missing fields");
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields",
    });
  }

  try {
    const reservation = await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    console.log("✅ Reservation created:", reservation);

    return res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error in controller:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};
