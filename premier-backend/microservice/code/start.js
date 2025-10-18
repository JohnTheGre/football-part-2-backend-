import express, { json } from "express";
import clubRoutes from "./routes/clubRoutes.js";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());
app.use("/api", clubRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
