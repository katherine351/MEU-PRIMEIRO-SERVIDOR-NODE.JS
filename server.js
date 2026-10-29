import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo à Central de Informações da Escola!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});