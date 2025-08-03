import { obtenerLibros, obtenerLibrosXId } from "../Model/libro-model.js";

const getAllBooks = async (req, res) => {
  try {
    let books = await obtenerLibros();
    res.status(200).send(`Libros obtenidos ${books}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getBookById = async (req, res) => {
  try {
    let bookById = await obtenerLibrosXId();
    res.status(200).send(`Libros obtenidos por ID: ${bookById}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createBooks = (req, res) => {
    try {
    res.status(201).send(`Crear un nuevo libro: ${req.body}`);
  } catch {
    res.status(500).send(error);
  }
};

const updataBooks = (req, res) => {
  try {
     res.status(200).send(`Actualizar los datos del libro${req.params.id}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updataExistence = (req, res) => {
  try {
    res.status(200).send(`Actualizar la existencia del libro`);
  } catch {
     res.status(500).send(error);
  }
};

const deleteBooks = (req, res) => {
  try {
     res.status(200).send(`Libro ${req.params.id} eliminado con éxito`);
  } catch {
     res.status(500).send(error);
  }
};




const availableBooks = (req, res) => {
  try {
     res.satuts(200).send ("Obtener todos los libros con existencia disponible para prestamos");
  } catch (error) {
    res.satuts(500).send(error);
  }
   
};
export {
  getAllBooks,
  getBookById,
  createBooks,
  updataBooks,
  updataExistence,
  deleteBooks,
  availableBooks
};
