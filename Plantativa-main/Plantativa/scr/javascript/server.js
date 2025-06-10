const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const SECRET = 'pyetroenicolasgaymers';
const users = []; // Banco de dados em memória

// Cadastro de Cliente
app.post("/cadastroCliente", async (req, res) => {
    const { email, senha } = req.body;
    const senhaCriptografada = await bcrypt.hash(senha, 8);
    users.push({ email, senha: senhaCriptografada });
    res.status(201).send("Usuario cadastrado com sucesso");
});

// Login
app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const usuario = users.find(u => u.email === email);
    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
        return res.status(401).send("Usuario não existe");
    }

    const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Middleware para autenticar o token
function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET, (err, usuario) => {
        if (err) return res.sendStatus(401);
        req.usuario = usuario;
        next();
    });
}

// Rota protegida
app.get("/painel", autenticarToken, (req, res) => {
    res.send(`Bem vindo ao Painel, usuario: ${req.usuario.email}`);
});

app.listen(3000, () => console.log("API rodando na porta 3000"));