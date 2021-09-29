import express from "express";

import { userRoutes } from "./modules/routes/UserRoute.js";


export const routes = express.Router();

routes.use("/user", userRoutes);
