import { Router } from "express";
import { getAllLoans, getAllLoansById, deleteLoans, createLoans, updateLoans} from "../Controller/prestamo_controller.js";

const router= Router();

router.get('/prestamos', getAllLoans);

router.get('/prestamos/:id', getAllLoansById);

router.post('/prestamos', createLoans); 

router.put('/prestamos/:id', updateLoans);

router.delete('/prestamos/:id', deleteLoans);


export default router;