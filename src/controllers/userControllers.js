const { text } = require("express");
const userService = require("../services/userServices");

async function index(req, res) {
  const users = await userService.getAllUsers();
  res.json(users);
}

async function show(req, res) {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(user);
}

async function store(req, res) {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
}

async function update(req, res) {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar usuário" });
  }
}

async function destroy(req, res) {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: "Erro ao deletar usuário" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
