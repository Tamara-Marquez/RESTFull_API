import { pool } from "../Config/db.js";

export const obtenerPrestamos = async () => {
  try {
    let sentence = "SELECT * FROM Prestamos";
    const [rows] = await pool.query(sentence);
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const ObtenerPrestamosXId = async () => {
  try {
    let sentence = "SELECT id_prestamo FROM Prestamos";
    const [rows] = await pool.query(sentence);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
