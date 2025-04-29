const Blockchain = require("./blockchain");
const express = require("express");
const app = express();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

let blockchain = new Blockchain();

app.get("/blocks", (req, res) => {
    res.json(blockchain.chain);
});

app.post("/mine", (req, res) => {
    const data = req.body.data;

    if (!data) {
        return res.status(400).json({ error: "Données manquantes" });
    }

    const newBlock = blockchain.addBlock(data);

    res.json({
        message: "Bloc ajouté avec succès",
        block: newBlock,
    });
});

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
