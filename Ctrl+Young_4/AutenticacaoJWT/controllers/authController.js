const jwt = require("jsonwebtoken");

const users = [
    { email: 'user@example.com', password: '123456' },
    { email: 'marcioca@gmail.com', password: '654321' }
];

const login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Credênciais inválidas' });
    }
    const token = jwt.sign({ email: user.email }, 'secreta', { expiresIn: '30s' });
    res.json({ token, email: user.email });
};

module.exports = { login };