const jwt = require("jsonwebtoken");
let refreshTokens = [];

const users = [
    { email: 'user@example.com', password: '123456', role: 'student' },
    { email: 'marcioca@gmail.com', password: '654321', role: 'admin' }
];

const login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Credênciais inválidas' });
    }

    const access = jwt.sign(
        { email: user.email, role: user.role },
        "secreta",
        { expiresIn: "30s" }
    );
    const refresh = jwt.sign({ email: user.email }, "refresh_secreta", { expiresIn: "7d" });

    refreshTokens.push(refresh);

    res.json({ access, refresh });
};

const refresh = (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(401).json({ error: "Acesso negado" });
    if (!refreshTokens) //PAREI AQUIII
}

module.exports = { login };