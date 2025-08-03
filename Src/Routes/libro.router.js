import { Router } from "express";   
import { getAllBooks, getBookById, createBooks, updataBooks, deleteBooks, updataExistence } from "../Controller/libro_controller.js";
const router= Router ();

router.get('/libros', getAllBooks);

router.get('/libros', getBookById);

router.post('/libros',createBooks);

router.put('/libros/:id', updataBooks);

router.put('/libros/:id/existencia', updataExistence);

router.delete('/libros/:id', deleteBooks);

export default router;