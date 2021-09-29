import express from "express";


import { UsersController } from "../controller/UsersController.js";

export const userRoutes = express.Router();

const { createUser, deleteUser, listUser } =
  new UsersController();


userRoutes.post("/", createUser); 
userRoutes.get("/", listUser);
userRoutes.delete("/:id", deleteUser);
