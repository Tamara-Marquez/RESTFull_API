import { pool } from "../Config/db.js";

const obtenerUsuarios = async () => {
  try {
    let sentence = "SELECT * FROM usuario";
    const [rows] = await pool.query(sentence);
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export {obtenerUsuarios}