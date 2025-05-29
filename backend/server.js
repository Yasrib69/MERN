import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

dbConnection(); // make sure MongoDB is connected

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
