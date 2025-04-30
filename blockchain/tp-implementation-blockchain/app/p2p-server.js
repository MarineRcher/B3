const WebSocket = require("ws");
const Blockchain = require("./blockchain");

class P2PServer {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    listen() {
        const ws = new WebSocket.Server({ port: 5005 });

        ws.on("connection", (socket) => this.connectSocket(socket));
        this.connectToPeers();
    }

    connectSocket(socket) {
        this.sockets.push(socket);
        this.messageHandler(socket);
        this.sendChain(socket);
    }

    connectToPeers() {
        const peers = process.env.PEERS ? process.env.PEERS.split(",") : [];

        peers.forEach((peer) => {
            const socket = new WebSocket(peer);

            socket.on("open", () => {
                console.log(`Connected to peer: ${peer}`);
                this.connectSocket(socket);
            });

            socket.on("error", (error) => {
                console.error(`WebSocket error with peer ${peer}:`, error);
            });
        });
    }

    messageHandler(socket) {
        socket.on("message", (message) => {
            const data = JSON.parse(message);
            if (
                data &&
                Blockchain.isValidChain(data) &&
                data.length > this.blockchain.chain.length
            ) {
                this.blockchain.chain = data;
            }
        });
    }

    sendChain(socket) {
        socket.send(JSON.stringify(this.blockchain.chain));
    }

    syncChains() {
        this.sockets.forEach((socket) => {
            this.sendChain(socket);
        });
    }
}

module.exports = P2PServer;
