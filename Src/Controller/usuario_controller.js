import { obtenerUsuarios } from "../Model/usuario-model.js";

const getAllUsers = async (req, res) => {
  try {
    let users = await obtenerUsuarios();
    res.status(200).send(`Obteniendo los usuarios ${users}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserByID = (req, res) => {
  try {
    return res.status(200).send(`Obtener un usuario por su id_usuario: ${req.params.id}`);
  } catch {
    res.status(500).send(error);
  }
};

const createUser = (req, res) => {
  try {
    res.status(201).send(`Crear un nuevo usuario: ${req.body}`);
  } catch {
    res.status(500).send(error);
  }
};

const updateUserByID = (req, res) => {
  try {
    res.status(200).send(`Actualizar los datos de un usuario con id: ${req.params.id}`);
  } catch {
    res.status(500).send(error);
  }
};

const deleteUser = (req, res) => {
  try {
    res.status(204).send(`Eliminar un usuario con id: ${req.params.id}`);
  } catch {
    res.status(500).send(error);
  }
};

export { getAllUsers, getUserByID, createUser, updateUserByID, deleteUser };
