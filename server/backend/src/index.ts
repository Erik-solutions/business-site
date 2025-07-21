import express from "express";
import formRoutes from "./routes/formRoutes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/forms", formRoutes);


app.get("/", (_req, res) => {
  res.send("Hello from the TypeScript + Express backend!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log("Database URL:", process.env.DATABASE_URL);

});
