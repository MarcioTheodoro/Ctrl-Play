const express = require("express");
const app = express();
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require("./middleware/authMiddleware");
const rolesMiddleware = require("./middleware/rolesMiddleware");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRoutes);

app.get("/api/perfil", authMiddleware.tokenValidation, (req, res) => {
 res.json({ mensagem: `Bem-vindo, ${req.user.email}!` });
});

app.get("/api/admin", rolesMiddleware.authorize(['admin']), (_req, res) => {
 res.json({ mensagem: "Bem-vindo, administrador!" });
});


app.get("/api/student", rolesMiddleware.authorize(['student', 'admin']), (req, res) => {
 res.json({ mensagem: `Bem-vindo, ${req.user.email}!` });
});

app.listen(3000, () => console.log("Server running on port 3000 beibe!"));