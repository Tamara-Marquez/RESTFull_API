import { pool } from "../Config/db.js";

const obtenerLibros = async () => {
  try {
    let sentence = "SELECT * FROM libro";
    const [rows] = await pool.query(sentence);
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const obtenerLibrosXId = async () => {
  try {
    let sentence = "SELECT id_libro FROM libro";
    const [rows] = await pool.query(sentence);
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};


export{obtenerLibros, obtenerLibrosXId}