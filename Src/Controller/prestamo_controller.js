import { obtenerPrestamos, ObtenerPrestamosXId } from "../Model/prestamo-model.js";
import router from "../Routes/libro.router.js";

const getAllLoans = async (req, res) => {
  try {
    let loans = await obtenerPrestamos();
    res.status(200).send(`Listado de los prestamos ${loans}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllLoansById = async (req, res) => {
  try {
    let loansById = await ObtenerPrestamosXId();
    res.status(200).send(`Obteniendo prestamos por ID: " ${loansById}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createLoans = async (req, res) => {
  try {
    res.status(201).send(`Creamos un nuevo prestamo ${req.body}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateLoans = (req, res) => {
  try {
    res.status(200).send(`Actualizar los datos de un un prestamo ${req.params.id}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteLoans = (req, res) => {
  try {
    return res.status(204).send(`Préstamo ${req.params.id} eliminado con éxito`);
  } catch {
    return res.status(500).send(error);
  }
};


const getLoansUser = (req, res) => {
  try {
     res.status(200).send(`Obtener todos los prestamos de un usuarios especifico ${req.params.id}`)
  } catch (error) {
    res.status(500).send(error)
  }
};


const getLoansBooks =(req, res) => {
  try {
    res.status(200).send ("Obtener todos los prestamos realizados por un libro")
  } catch (error) {
    res.status(500).send(error)
  }
};




export { getAllLoans, getAllLoansById, updateLoans, deleteLoans, createLoans,getLoansUser, getLoansBooks };
