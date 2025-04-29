const Blockchain = require("./blockchain");
const P2PServer = require("./p2p-server");
const express = require("express");
const app = express();

app.use(express.json());

let blockchain = new Blockchain();
let p2p = new P2PServer(blockchain);

// pour tester :
// HTTP_PORT=3003 P2P_PORT=5002 PEERS=ws://localhost:5001 yarn dev

app.get("/blocks", (req, res) => {
    res.json(blockchain.chain);
});

app.post("/mine", (req, res) => {
    const data = req.body.data;

    if (!data) {
        return res.status(400).json({ error: "Données manquantes" });
    }

    const newBlock = blockchain.addBlock(data);
    p2p.syncChains();

    res.json({
        block: newBlock,
    });
});

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
p2p.listen();
