import express from 'express';

const app = express();

const PORTA = 4000;

// Rota 1
app.get('/', (req, res) => {
res.send('Bem-vindo à Central de Informações da Escola!');
});

// Rota 2 
app.get('/status', (req, res) => {
res.json({
status: 'online',
mensagem: 'O servidor está funcionando!'
});
});

// Rota 3 
app.get('/escola', (req, res) => {
res.json({
nome: 'Escola Técnica Futuro',
cidade: 'São Paulo',
tipo: 'Ensino Técnico'
});
});

// Rota 4
app.get('/cursos', (req, res) => {
res.json([
{
id: 1,
nome: 'Desenvolvimento de Sistemas'
},
{
id: 2,
nome: 'Redes de Computadores'
},
{
id: 3,
nome: 'Administração'
}
]);
});

// Rota 5
app.get('/professor', (req, res) => {
res.json({
nome: 'Eduardo Silva',
disciplina: 'Programação Back-End'
});
});

// Rota 6
app.get('/ajuda', (req, res) => {
res.send(
'Rotas disponíveis:\n' +
'/ - Página inicial\n' +
'/status - Estado do servidor\n' +
'/escola - Informações da escola\n' +
'/cursos - Lista de cursos disponíveis\n' +
'/professor - Informações do professor\n' +
'/ajuda - Orientações de uso\n' +
'/requisicao - Informações sobre a requisição HTTP'
);
});

// Desafio extra
app.get('/requisicao', (req, res) => {
res.json({
metodo: req.method,
caminho: req.path,
mensagem: 'A solicitação foi recebida com sucesso!'
});
});


app.listen(PORTA, () => {
console.log(`Servidor rodando em http://localhost:${PORTA}`);
});