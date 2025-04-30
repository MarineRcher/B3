const { DIFFICULTY, MINE_RATE } = require("./config");
const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(
        timestamp,
        lastHash,
        hash,
        data,
        nonce = 0,
        difficulty = DIFFICULTY
    ) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    toString() {
        return `timestamp: ${this.timestamp}, lastHash: ${this.lastHash}, hash: ${this.hash}, data: ${this.data}.`;
    }

    static genesis() {
        const timestamp = "Genesis time";
        const lastHash = "-----";
        const hash = "first-hash";
        const data = "Hi";

        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static blockHash(block) {
        const { timestamp, lastHash, data } = block;
        return Block.hash(timestamp, lastHash, data);
    }

    static mineBlock(lastBlock, data) {
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let timestamp;
        let nonce = 0;
        let hash;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(lastBlock, timestamp);
            hash = Block.hash(timestamp, lastHash, data);
        } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));

        return new this(timestamp, lastHash, hash, data);
    }

    static adjustDifficulty(lastBlock, currentTime) {
        let { difficulty } = lastBlock;

        difficulty =
            lastBlock.timestamp + MINE_RATE > currentTime
                ? difficulty + 1
                : difficulty - 1;

        return Math.max(1, difficulty);
    }
}

module.exports = Block;
