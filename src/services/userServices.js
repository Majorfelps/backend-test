const prisma = require("../prisma/client");

async function getAllUsers() {
  return await prisma.user.findMany();
}

async function getUserById(id) {
  return await prisma.user.findUnique({ where: { id: Number(id) } });
}

async function createUser(data) {
  return await prisma.user.create({ data });
}

async function updateUser(id, data) {
  return await prisma.user.update({ where: { id: Number(id) }, data });
}

async function deleteUser(id) {
  return await prisma.user.delete({ where: { id: Number(id) } });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
