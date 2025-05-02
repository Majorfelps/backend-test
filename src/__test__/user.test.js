const request = require("supertest");
const express = require("express");
const app = express();
const userRoutes = require("../routes");
const prisma = require("../prisma/client");

app.use(express.json());
app.use("/users", userRoutes);

beforeAll(async () => {
  await prisma.user.deleteMany(); // Limpa a tabela antes dos testes
});

afterAll(async () => {
  await prisma.$disconnect(); // Encerra conexão com o banco
});

describe("Testes da API de Usuários", () => {
  it("Deve criar um novo usuário", async () => {
    const res = await request(app).post("/users").send({
      name: "Teste User",
      email: "testeuser@email.com",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("Deve retornar a lista de usuários", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("Deve atualizar um usuário existente", async () => {
    const users = await prisma.user.findMany();
    const id = users[0].id;

    const res = await request(app).put(`/users/${id}`).send({
      name: "Nome Atualizado",
      email: "atualizado@email.com",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe("Nome Atualizado");
  });

  it("Deve deletar um usuário", async () => {
    const users = await prisma.user.findMany();
    const id = users[0].id;

    const res = await request(app).delete(`/users/${id}`);
    expect(res.statusCode).toEqual(204);
  });
});
