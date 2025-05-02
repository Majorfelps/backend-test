# 🚀 Backend - CRUD com Node.js, Express, Prisma e PostgreSQL

Este projeto é um exemplo de backend para um CRUD de usuários, utilizando **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**. Ele está estruturado com foco em organização e boas práticas, separado em `controllers`, `services`, `routes` e conexão via `Prisma Client`.

---

## 📁 Estrutura do Projeto

```

/backend
├── .env
├── /prisma
│ └── schema.prisma
├── /src
│ ├── /controllers
│ ├── /services
│ ├── /routes
│ ├── /prisma
│ └── server.js

```

---

## ⚙️ Tecnologias Usadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- dotenv
- cors

---

## ✅ Pré-requisitos

- Node.js instalado (v18+ recomendado)
- PostgreSQL instalado e em execução
- Um banco de dados criado no Postgres (ex: `meubanco`)
- Um editor de código (ex: VSCode)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/seuprojeto.git
cd seuprojeto/backend
```

### 2. Instale as dependências

```bash
npm install
```

---

## 🔐 Configuração do Banco de Dados

### 1. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do backend com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://postgres:suasenha@localhost:5432/meubanco?schema=public"
PORT=3001
```

Substitua:

- `postgres`: seu usuário do Postgres
- `suasenha`: sua senha
- `meubanco`: nome do seu banco
- `localhost` e `5432` conforme sua config local

---

## 🔄 Criação das Tabelas

### 1. Inicialize o Prisma e crie a migração

```bash
npx prisma migrate dev --name init
```

---

## ▶️ Execução do Servidor

```bash
npm run dev
```

> O servidor estará rodando em: `http://localhost:3001`

---

## 📬 Endpoints Disponíveis

- `GET    /users` → Lista todos os usuários
- `GET    /users/:id` → Retorna um usuário específico
- `POST   /users` → Cria um novo usuário
- `PUT    /users/:id` → Atualiza um usuário existente
- `DELETE /users/:id` → Deleta um usuário

---

## 🧪 Dica Extra: Visualize dados com o Prisma Studio

```bash
npx prisma studio
```

Abre uma interface gráfica para visualizar, editar e excluir dados direto do navegador.

---

## 🤝 Contribuições

Fique à vontade para sugerir melhorias, abrir issues ou mandar aquele PR caprichado!

---

## 🧔 Autor

Desenvolvido por Michael Cruz

📧 michael.as.cruz@gmail.com

🔗 GitHub: @majorfelps

---

Com fé, café e código limpo, bora construir o futuro! 🚀
