import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8080;

const corsOptions = {
    origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.post("/register-user", (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res
            .status(400)
            .json({ error: "Missing one or more required fields" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    res.status(200).json({ message: "Server registered successfully." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
