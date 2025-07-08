import express from "express";
import dotenv from "dotenv";
import profileRoutes from "./route/profileRoute";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/profiles", profileRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
