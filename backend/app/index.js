import express from "express";
import cors from "cors";
import { routes } from "./route.js";

const app = express();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
