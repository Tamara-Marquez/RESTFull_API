import { Router } from "express";

import { getAllUsers, getUserByID, createUser, updateUserByID, deleteUser } from "../Controller/usuario_controller.js"
const router = Router();

router.get("/usuarios", getAllUsers);

router.get("/usuarios/:id", getUserByID);

router.post("/usuarios", createUser);

router.put("/usuarios/:id", updateUserByID);

router.delete("/usuarios/:id", deleteUser);

export default router;
